import {
  Component
} from '@angular/core';

console.log('`Courselist` component loaded asynchronously');

@Component({
  selector: 'courselist',
  templateUrl: 'courselist.component.html',
  styleUrls: ['courselist.component.css'],
})
export class CourselistComponent {
    name="Courselist Component"
    public max: number = 200;
public type: string;
public stacked: any[] = [];

public constructor() {
  this.randomStacked();
}

public randomStacked(): void {
  let types = ['success', 'info'];

  this.stacked = [];
  let total = 0;
  let n = 2;
  let value = [20,30];
  for (let i = 0; i < n; i++) {
    total += value[i];
    let barvalue = value[i];
    let type = types[i];
    this.stacked.push({
      barvalue,
      max: barvalue, // i !== (n - 1) ? value : 100,
      type: types[i]
    });
  }
}
}
