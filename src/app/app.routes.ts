// Modules
import { Routes } from '@angular/router';

//  Components
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './components/restaurant/detail/restaurant-detail.component';


export const AppRoutes: Routes = [
  // Home
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'restaurants',
    component: RestaurantComponent
  },
  {
    path: 'restaurants/detail',
    component: RestaurantDetailComponent
  },
  // Default Route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

