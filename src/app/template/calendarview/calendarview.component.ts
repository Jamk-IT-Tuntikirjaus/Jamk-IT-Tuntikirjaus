import { Component } from '@angular/core';
//Enables date formatting with typescript because pipes do not work on mobile
import * as moment from 'moment';

@Component({
  selector: 'calendarview',
  templateUrl: './calendarview.component.html',
  styleUrls: ['./calendarview.component.css'],

})

export class CalendarViewComponent {
  //Sisältää listan päivän tunneista
  week: Array<Day>; //or Day[]
  //Täytetään week listasta
  view: Array<Day>; //or Day[]
  constructor(){
    //Private construct values
    this.week = new Array<Day>();
    this.view = new Array<Day>();
    this.loadWeek();
    //this.showView(7);
    //this.days = 7;

    /* localstorageen ei välttämättä lupaa...
    //Hakee koneen muistista tekstin pätkän.
    let days = localStorage.getItem("token");
    //let a = days - 0;
    //Jos tekstiä ei löydy...
    if(days.length == 0){
      //...laitetaan se sinne...
      localStorage.setItem("token", '7777777');
      days = localStorage.getItem("token");
    }
    */
    //Cookie versio
    let days = this.getCookie("calendardaycount");
    if(days == ""){
      document.cookie = "calendardaycount=7777777";
      days = this.getCookie("calendardaycount");
    }

    //...ja ladataan näkymä.
    this.showView(days.length);

  }

  getCookie(cookiename: string){
    var name = cookiename + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
     for(var i = 0; i <ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0) == ' ') {
             c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
         }
     }
     return "";
   }

  day(dayss: string){
    //localStorage.setItem("token", dayss);
    document.cookie = "calendardaycount=" + dayss;
    this.showView(dayss.length);
  }

  loadWeek(){
    let date = new Date();
    //If day is not monday, we make it!
    if(!(date.getDay() == 1)){
      date.setDate(date.getDate() - (date.getDay() - 1));
    }

    //Add days to week
    for(let i = 0; i < 7; i++){
      let lectures = new Array<Lecture>();
      let lecture = new Lecture();
      lecture.setTime("8:00", "11:00");
      lecture.setCourse("ID" + i, "Name" + i, "Room" + i);
      lectures.push(lecture);

      lecture = new Lecture();
      lecture.setTime("12:00", "15:00");
      lecture.setCourse("ID" + i, "Name" + i, "Room" + i);
      lectures.push(lecture);

      //It's not fun to have monday for the rest of my life...
      let tempdate = new Date(date);
      let formatteddate = moment(tempdate).format('dddd D.M.YYYY');

      //The promised day!
      let day = new Day(tempdate, formatteddate, lectures);
      this.week.push(day);
      date.setDate(date.getDate() + 1);
    }
  }

  showView(count: number){
    if(count == 7){
      this.view = this.week;
    }
    else if(count == 3){
      let today = new Date();
      //Testit todennäköisesti toimiivat, mutta päivät pitäisi kahto view luokasta
      //let today = new Date(Date.UTC(2017, 1, 1));
      //let today = new Date(Date.parse("2017/1/1"));
      //.getDate() tykkää antaa seuraavan päivän...
      today.setDate(today.getDate());
      let weekday = new Date();
      weekday.setDate(today.getDate()-2);
      let daynum = today.getDay()
      this.view = new Array<Day>();
      for(let i = daynum; i < (daynum + 3); i++){

        weekday.setDate(weekday.getDate()+1);
        let tempdate = new Date(weekday);
        let tempday = new Day(tempdate, this.week[i].formatteddate, this.week[i].lectures);
        this.view.push(tempday);

        //this.view.push(this.week[i]);
      }
    }
    else if(count == 0){
      let today = new Date();
      this.view = new Array<Day>();
      this.view.push(this.week[this.currentIndex -1]);
    }
    else {
      let today = new Date();
      this.view = new Array<Day>();
      this.view.push(this.week[today.getDay()-1]);
    }

  }
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  currentIndex = new Date().getDay();
  // action triggered when user swipes
  swipe(action = this.SWIPE_ACTION.RIGHT) {
      // out of range
      // swipe right, next avatar
      if (action === this.SWIPE_ACTION.RIGHT) {
          //To left
          this.currentIndex--;
          if(this.currentIndex < 1) this.currentIndex = this.week.length;
      }

      // swipe left, previous avatar
      if (action === this.SWIPE_ACTION.LEFT) {
          //To right
          this.currentIndex++;
          if(this.currentIndex > this.week.length) this.currentIndex = 1;
      }
      this.showView(0);

      // toggle avatar visibility
      //this.week.forEach((x, i) => x.visible = (i === nextIndex));
  }
}

class Day {
  //Lista tunneista
  lectures: Array<Lecture>; //or Lecture[]
  date: Date;
  formatteddate: string;

  //Constructor that accepts date
  constructor(date: Date, formatteddate: string, lectures: Lecture[]){
      this.date = date;
      this.formatteddate = formatteddate;
      this.lectures = lectures;
  }
}

class Lecture {
  time = {
    start: '',
    end: ''
  }
  course = {
    id: '',
    name: '',
    room: ''
  }
  check = '';
  //Messages made for this lecture
  messages: Array<''>;//""[];

  constructor(){
    //Haetaan luennot jostain.
    //Lisätään luennon tie

    //Tietokantaan otetaan yhteyttä toisen serverin kautta
    //http://stackoverflow.com/questions/34368897/angular-2-and-mysql-consepts/
    //Answer from Kabahango about angular and mysql security

    //Katsotaan tietokannasta luennon merkkaus
    //Katsotaan tietokannasta luennon viestit
  }
  setTime(start: string, end: string){
    this.time.start = start;
    this.time.end = end;
  }
  setCourse(id: string, name: string, room: string){
    this.course.id = id;
    this.course.name = name;
    this.course.room = room;
  }
  onCheck(){
    switch(this.check){
      case '':
        this.check = 'true';
        break;
      case 'true':
        this.check = 'false';
        break;
      case 'false':
        this.check = 'true';
        break;
    }
  }
}
