import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
  // Properties /////////////////////////////////////
  /* Private */
  private amazonDataUrl: string = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';


  // Constructor /////////////////////////////////////
  constructor(private http: HttpClient) {

  }

  // Common Methods /////////////////////////////////////
  public fetchRestaurantData(): Observable<Object> {
    return this.http.get(this.amazonDataUrl);
  }
}
