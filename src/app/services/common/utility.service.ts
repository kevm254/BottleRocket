import { Injectable } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable()
export class UtilityService {
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer) {}

  // sanitizeImage(imageUrl: string): SafeStyle {
  //   return this.sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`);
  // }

  sanitizeImage(imageUrl: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(imageUrl);
  }


}
