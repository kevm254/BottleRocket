import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/cmp_services/home.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Constructor /////////////////////////////////////
  constructor(
    private homeService: HomeService,
  ) {
  }

  // Life-Cycle Methods /////////////////////////////////////
  ngOnInit(): void {
    this.homeService.alertMe();
  }

  // Common Methods /////////////////////////////////////


}
