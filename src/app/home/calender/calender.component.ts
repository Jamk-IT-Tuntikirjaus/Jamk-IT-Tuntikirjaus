import { Component } from '@angular/core';

@Component({
  selector: 'calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],

})
export class CalenderComponent {
  today = Date.now();
  Tomorrow = new Date();
  schedule = {
    format: {

    },
    today: Date.now(),
    week: Date.now(),
    weekday: Date.now()
  }
  calender = {
    week: [this.today, this.today, Date.UTC(2016,10,5), this.today, this.today, this.today, this.today]
  }
  lecture = {
    course: {
      id: "iio123123",
      name: "testi kurssi",
      room: "D422"
    },
    time: {
      start: "8.00",
      end: "9:30"
    }
  }
  lectures = [this.lecture, this.lecture];

  constructor() {

  }
}
