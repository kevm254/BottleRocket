import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-detail-cmp',
  templateUrl: './home-detail.component.html'
})
export class HomeDetailComponent {
  @Input()
  restaurantData: any = null;
}
