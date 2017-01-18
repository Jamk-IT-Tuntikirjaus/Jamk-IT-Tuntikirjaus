import { Component } from '@angular/core';

@Component({
  selector: 'ademo',
  templateUrl: './ademo.component.html'
  //template: 'TEst'
})
export class ADemo {

  name;
  constructor() {
    //En tiiä miten vielä...
    this.name = 'Max';
  }
}
