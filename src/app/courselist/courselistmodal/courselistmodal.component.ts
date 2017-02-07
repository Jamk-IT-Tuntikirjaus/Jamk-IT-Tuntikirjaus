import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'courselistmodal',
  templateUrl: './courselistmodal.component.html',
  styleUrls: ['courselistmodal.component.css'],
})
export class CourselistModalComponent {
    @Input() courseid: number;
    @Output() ondelete = new EventEmitter();
    constructor() {

    }
    public deleteCourse(): void {
        console.log(this.courseid)
        this.ondelete.emit(this.courseid)
    }
}
