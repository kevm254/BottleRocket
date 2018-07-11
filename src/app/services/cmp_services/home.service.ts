import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  public alertMe(): void {

    alert('whoa, you are doing an alert!');
  }
}
