// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailComponent } from './components/restaurant/detail/restaurant-detail.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Services
import { HomeService } from './services/cmp_services/home.service';
import { GoogleMapsService } from './services/common/google.service';
import { RestaurantBridgeService } from './services/cmp_services/restaurant_bridge.service';
import { UtilityService } from './services/common/utility.service';

// Models/Misc.
import { AppRoutes } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantDetailComponent,
    RestaurantComponent,
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],

  providers: [
    GoogleMapsService,
    RestaurantBridgeService,
    UtilityService,
    HomeService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
