import { Component, Input } from '@angular/core';

@Component({
  selector: 'restaurant-detail-cmp',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent {
  @Input()
  restaurantData: any = null;
}
