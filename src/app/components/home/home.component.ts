import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/cmp_services/home.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* ====================================================================== */
  // Properties
  /* ====================================================================== */
  public restaurantData: any;
  public currentlySelectedRestaurantData: any;



  /* ====================================================================== */
  // Constructor & Life-Cycle Methods
  /* ====================================================================== */
  // Constructor /////////////////////////////////////
  constructor(private homeService: HomeService,) {
  }


  // General Life-Cycle Methods /////////////////////////////////////
  ngOnInit(): void {
    this.fetchRestaurantData();
  }


  // ngOnInit Methods /////////////////////////////////////
  fetchRestaurantData(): void {
    this.homeService.fetchRestaurantData()
      .subscribe((data: any) => {
        this.restaurantData = data.restaurants ? data.restaurants : data;
      });
  }



  /* ====================================================================== */
  //  Action Methods
  /* ====================================================================== */
  // Click Methods /////////////////////////////////////
  selectRestaurantOnClick(restaurantData: any): void {
    alert(' Restaurant was selected!' + JSON.stringify(restaurantData));
  }
}
