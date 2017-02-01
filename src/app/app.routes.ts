import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

import { LoginComponent } from './home/login';
import { CourselistComponent } from './courselist';
import { CalendarComponent } from './calendar';


import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'courselist', component: CourselistComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: '**',    component: NoContentComponent }
];
