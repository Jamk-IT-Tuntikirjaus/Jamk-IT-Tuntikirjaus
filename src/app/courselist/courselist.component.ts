import {
  Component
} from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';

console.log('`Courselist` component loaded asynchronously');

@Component({
  selector: 'courselist',
  templateUrl: 'courselist.component.html',
  styleUrls: ['courselist.component.css'],
})
export class CourselistComponent {
    name="Coureselist Component"
}
