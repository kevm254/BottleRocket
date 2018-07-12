import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('default', style({
        backgroundColor: 'orange',
        width: '200px',
        height: '400px'
      }))

    ])
    ]
})
export class AppComponent {
  title = 'app';
}
