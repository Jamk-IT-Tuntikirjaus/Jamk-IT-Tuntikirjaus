import { Component } from '@angular/core';

@Component({
  selector: 'accordion-demo',
  templateUrl: './accord-test.component.html'
})
export class AccordionDemoComponent {
  public oneAtATime:boolean = true;
  public items:string[] = ['Item 1', 'Item 2', 'Item 3'];

  public status:Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public groups:any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem():void {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}

/*@Component({
  selector: 'ademo',
  templateUrl: './accord-test.component.html'
  //template: 'TEst'
})
export class ADemo {

  constructor() { this.name = 'Max'}
  sendData(){

  }
}
*/
