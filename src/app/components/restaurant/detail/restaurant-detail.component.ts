import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  private _restaurantData;
  @Input()
  set restaurantData(restaurantData) {
    this._restaurantData = restaurantData;

    this.initData();
    this.openPanel();

    this.showGoogleMaps(100, 100);
  }

  get restaurantData() {
    return this._restaurantData;
  }

  @Output()
  public clearParentDataEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public detailDisplayOpenStatusEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* ====================================================================== */
  //  Properties
  /* ====================================================================== */
  private _isOpen: boolean = false;
  get isOpen() { return this._isOpen };
  set isOpen(isOpen: boolean) { this._isOpen = isOpen; };


  // Restaurant's name taken from restaurantData
  private _restaurantName: string = '';
  get restaurantName() { return this._restaurantName; };
  set restaurantName(name: string) { this._restaurantName = name; };


  // Restaurant's category taken from restaurantData
  private _restaurantCategory: string = '';
  get restaurantCategory() { return this._restaurantCategory; }
  set restaurantCategory(category: string) { this._restaurantCategory = category; }


  // Restaurant's Address Line 1 taken from restaurantData
  private _restaurantAddress1: string = '';
  get restaurantAddress1() { return this._restaurantAddress1; }
  set restaurantAddress1(address: string) { this._restaurantAddress1 = address; }


  private _restaurantAddress2: string = '';
  get restaurantAddress2() { return this._restaurantAddress2; }
  set restaurantAddress2(address: string) { this._restaurantAddress2 =  address; }

  private _restaurantAddress3: string = '';
  get restaurantAddress3() { return this._restaurantAddress3; }
  set restaurantAddress3(address: string) { this._restaurantAddress3 = address; }


  private _restaurantPhoneNo: string = '';
  get restaurantPhoneNo() { return this._restaurantPhoneNo; }
  set restaurantPhoneNo(phoneNo: string) { this._restaurantPhoneNo = phoneNo; }


  private _restaurantTwitter: string = '';
  get restaurantTwitter() { return this._restaurantTwitter; }
  set restaurantTwitter(twitter: string) { this._restaurantTwitter = twitter ? ('@' + twitter) : ''; }


  private _restaurantLatitude: number = 0;
  get restaurantLatitude() { return this._restaurantLatitude; }
  set restaurantLatitude(lat: number) { this._restaurantLatitude = lat; }

  private _restaurantLongitude: number = 0;
  get restaurantLongitude() { return this._restaurantLongitude; }
  set restaurantLongitude(lng: number) { this._restaurantLongitude = lng; }

  // Getters
   get restaurantDataLoaded() { return this.restaurantData ? true : false };


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
    // this.redirectToHomeIfNoData();

    // Show Google Maps. Must occur after initData

  }


  private showGoogleMaps(lat: number, lng: number): void {
    if(this.restaurantData) {
      this.restaurantLatitude = this.restaurantData.location ? this.restaurantData.location.lat : 0;
      this.restaurantLongitude = this.restaurantData.location ? this.restaurantData.location.lng : 0;
      if (this.restaurantLatitude && this.restaurantLongitude) {
        this.googleMapsService.showMap(this.restaurantLatitude, this.restaurantLongitude);
      }
    }
  }

  private initData() {
    if(this.restaurantData) {
      this.restaurantName = this.restaurantData.name || '';
      this.restaurantCategory = this.restaurantData.category || '';
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



  /* ====================================================================== */
  //  Action Methods
  /* ====================================================================== */
  closePanel() {
    this.detailDisplayIsClosed();

    this.clearParentData();
  }

  openPanel() {
    if (this.restaurantData) {
      this.detailDisplayIsOpen();
    }
  }

  clearData() {
    this.clearParentData();
  }

  clearLocalData() {

  }

  clearParentData() {
   this.clearParentDataEmitter.emit();
  }

  detailDisplayIsOpen() {
    this.isOpen = true;
    this.detailDisplayOpenStatusEmitter.emit(true);
  }

  detailDisplayIsClosed() {
    this.isOpen = false;
    this.detailDisplayOpenStatusEmitter.emit(false);
  }


}
