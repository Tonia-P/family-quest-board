import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
