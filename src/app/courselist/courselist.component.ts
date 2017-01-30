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
public max: number = 750;
public type: string;
public teachinghours: number = 500;
public planninghours: number = 350;
public overworktime: number = 0;
public stacked: any[] = [];
public constructor() {
  this.randomStacked();
}
public randomStacked(): void {
  let types = ['success', 'info', 'danger'];

  this.stacked = [];
  let total = 0;
  let n = 3;
  if (this.teachinghours + this.planninghours > this.max){
      this.overworktime = (this.teachinghours + this.planninghours) - this.max;
      this.max = this.overworktime*2 + this.max;
  }
  let value = [this.teachinghours / this.max * 100, this.planninghours / this.max * 100, this.overworktime / this.max * 100];
  let hvalue = [this.teachinghours, this.planninghours, this.overworktime];
  for (let i = 0; i < n; i++) {
    total += value[i];
    let barvalue = value[i];
    let hourvalue = hvalue[i];
    let type = types[i];
    this.stacked.push({
      hourvalue,
      barvalue,
      max: barvalue, // i !== (n - 1) ? value : 100,
      type: type
    });
  }
}
}
