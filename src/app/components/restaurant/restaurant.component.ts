// Core
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

// Services
import { HomeService } from '../../services/cmp_services/home.service';



@Component({
  selector: 'restaurant-cmp',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  /* ====================================================================== */
  // Properties
  /* ====================================================================== */
  public restaurantData: any;
  public currentlySelectedRestaurantData: any;


  /* ====================================================================== */
  // Constructor & Life-Cycle Methods
  /* ====================================================================== */
  // Constructor /////////////////////////////////////
  constructor(private homeService: HomeService,
              private sanitizer: DomSanitizer) {
  }


  // General Life-Cycle Methods /////////////////////////////////////
  /* NOTE:
   -- Do not place implementation details inside the life-cycle methods.
   -- Create a function and then call the function in the life-cycle method.
   */
  ngOnInit(): void {
    this.fetchRestaurantDataOnInit();
  }


  // ngOnInit Methods /////////////////////////////////////
  fetchRestaurantDataOnInit(): void {
    this.homeService.fetchRestaurantData()
      .subscribe((data: any) => {
        this.restaurantData = data.restaurants ? data.restaurants : data;
      });
  }



  /* ====================================================================== */
  //  Action Methods
  /* ====================================================================== */
  // Click Methods /////////////////////////////////////
  selectRestaurantOnClick(restaurant: any): void {
    alert('clicked!');
    alert(JSON.stringify(restaurant));
    this.currentlySelectedRestaurantData = restaurant;
  }


  /* ====================================================================== */
  //  Action Methods
  /* ====================================================================== */
  sanitizeImage(imageUrl: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`);
  }



}
