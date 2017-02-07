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
        try {
        this.ondelete.emit(this.courseid)
    }
    catch(e) { console.error(e) }
    }
}
