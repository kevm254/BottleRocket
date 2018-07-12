import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GoogleMapsService } from '../../../services/common/google.service';
import { RestaurantBridgeService } from '../../../services/cmp_services/restaurant_bridge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'restaurant-detail-cmp',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  /* ====================================================================== */
  //  Inputs & Outputs
  /* ====================================================================== */
  private restaurantData: any = null;


  /* ====================================================================== */
  //  Properties
  /* ====================================================================== */
  private _restaurantName: string = '';
  private _restaurantCategory: string = '';
  private _restaurantAddress1: string = '';
  private _restaurantAddress2: string = '';
  private _restaurantAddress3: string = '';
  private _restaurantPhoneNo: string = '';
  private _restaurantTwitter: string = '';

  // Getters
  get restaurantDataLoaded() { return this.restaurantData ? true : false };
  get restaurantName() { return this._restaurantName; }
  get restaurantCategory() { return this._restaurantCategory; }
  get restaurantAddress1() { return this._restaurantAddress1; }
  get restaurantAddress2() { return this._restaurantAddress2; }
  get restaurantAddress3() { return this._restaurantAddress3; }
  get restaurantPhoneNo() { return this._restaurantPhoneNo; }
  get restaurantTwitter() { return this._restaurantTwitter; }

  // setters
  set restaurantName(name: string) { this._restaurantName = name; }
  set restaurantAddress1(address: string) { this._restaurantAddress1 = address; }
  set restaurantAddress2(address: string) { this._restaurantAddress2 =  address; }
  set restaurantAddress3(address: string) { this._restaurantAddress3 = address; }
  set restaurantPhoneNo(phoneNo: string) { this._restaurantPhoneNo = phoneNo; }
  set restaurantTwitter(twitter: string) { this._restaurantTwitter = twitter ? ('@' + twitter) : ''; }



  /* ====================================================================== */
  // Constructor & Life-Cycle Methods
  /* ====================================================================== */
  // Constructor /////////////////////////////////////
  constructor(private googleMapsService: GoogleMapsService,
              private router: Router,
              private restaurantBridgeService: RestaurantBridgeService) {
  }


  // General Life-Cycle Methods /////////////////////////////////////
  /* NOTE:
   -- Do not place implementation details inside the life-cycle methods.
   -- Create a function and then call the function in the life-cycle method.
   */

  // ngOnInit Methods /////////////////////////////////////
  ngOnInit() {
    // Initialize Data
    this.initData();

    // If No Data, Redirect Back Home
    this.redirectToHomeIfNoData();

    // Show Google Maps
    this.showGoogleMaps(100, 100);
  }


  private showGoogleMaps(lat: number, lng: number): void {
    this.googleMapsService.showMap(lat, lng);
  }

  private initData() {
    this.restaurantData = this.restaurantBridgeService.currentlySelectedRestaurant;

    if(this.restaurantData) {
      this.restaurantName = this.restaurantData.name || '';
      this.restaurantAddress1 = this.restaurantData.location ? this.restaurantData.location.formattedAddress[0] : '';
      this.restaurantAddress2 = this.restaurantData.location ? this.restaurantData.location.formattedAddress[1] : '';
      this.restaurantAddress3 = this.restaurantData.location ? this.restaurantData.location.formattedAddress[2] : '';
      this.restaurantPhoneNo = this.restaurantData.contact ? this.restaurantData.contact.formattedPhone : '';
      this.restaurantTwitter = this.restaurantData.contact ? this.restaurantData.contact.twitter : '';
    }
  }

  private redirectToHomeIfNoData() {
    if (!this.restaurantDataLoaded) {
      this.router.navigate(['/home']);
    }
  }

  // ngOnDestroy Methods /////////////////////////////////////
  ngOnDestroy() {
    this.clearData();
  }

  clearData() {
    this.restaurantBridgeService.currentlySelectedRestaurant = null;
  }

  /* ====================================================================== */
  //  Action Methods
  /* ====================================================================== */

}
