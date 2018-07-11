// Modules
import { Routes } from '@angular/router';

//  Components
import { HomeComponent } from './components/home/home.component';


export const AppRoutes: Routes = [
  // Home
  {
    path: 'home',
    component: HomeComponent
  },

  // Default Route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

