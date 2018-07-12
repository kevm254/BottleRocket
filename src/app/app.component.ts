import { Component } from '@angular/core';
import { trigger, transition, group, query, state, style, animate } from '@angular/animations';
import { fadeAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeSlide', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)'}),
            animate('0.4s ease-in-out', style( { transform: 'translateX(0%)'}))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)'}),
            animate('0.4s ease-in-out', style({ transform: 'translateX(-100%)'}))
          ], { optional: true }),
        ])
      ])
    ])
  ]

})
export class AppComponent {
  title = 'app';

  getState(outletRef: RouterOutlet) {
    return {
      value: outletRef.activatedRoute.snapshot.params.index
    }
  }
}
