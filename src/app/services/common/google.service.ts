import { Injectable } from '@angular/core';

@Injectable()
export class GoogleMapsService {

  public showMap(latitude: number, longitude: number) {
    let directionsService: any = new google.maps.DirectionsService;
    let directionsDisplay: any = new google.maps.DirectionsRenderer;

    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: { lat: latitude, lng: longitude }
    });

    let marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude },
      map: map,
      title: ''
    });
  }
}
