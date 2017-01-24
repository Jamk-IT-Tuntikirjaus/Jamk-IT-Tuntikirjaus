import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home';
//import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { LoginComponent } from './home/login';
import { CourselistComponent } from './courselist';
import { CalendarComponent } from './calendar';

import { CardComponent } from './home/card';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'card', component: CardComponent },
  //{ path: 'home',  component: HomeComponent },
  //{ path: 'about', component: AboutComponent },
  { path: 'courselist', component: CourselistComponent },
  { path: 'calendar', component: CalendarComponent},
  //{ path: 'detail', loadChildren: './+detail#DetailModule'},
  //{ path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent }
];
