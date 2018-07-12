import { Injectable } from '@angular/core';

@Injectable()
export class GoogleMapsService {

  public showMap(lat: number, lng: number) {
    let directionsService: any = new google.maps.DirectionsService;
    let directionsDisplay: any = new google.maps.DirectionsRenderer;
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: { lat: 11.85, lng: 87.65 }
    });
  }
}
