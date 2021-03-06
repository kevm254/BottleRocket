import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/cmp_services/home.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* ====================================================================== */
  // Properties
  /* ====================================================================== */




  /* ====================================================================== */
  // Constructor & Life-Cycle Methods
  /* ====================================================================== */
  // Constructor /////////////////////////////////////
  constructor(private homeService: HomeService,) {
  }


  // General Life-Cycle Methods /////////////////////////////////////
  /* NOTE:
  -- Do not place implementation details inside the life-cycle methods.
  -- Create a function and then call the function in the life-cycle method.
   */
  ngOnInit(): void {
  }



  /* ====================================================================== */
  //  Action Methods
  /* ====================================================================== */
  // Click Methods /////////////////////////////////////

}
