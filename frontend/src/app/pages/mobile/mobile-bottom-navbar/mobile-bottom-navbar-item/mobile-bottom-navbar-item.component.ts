import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-bottom-navbar-item',
  templateUrl: './mobile-bottom-navbar-item.component.html',
  styleUrls: ['./mobile-bottom-navbar-item.component.scss']
})
export class MobileBottomNavbarItemComponent {

  @Input() label: string = 'Home';
  @Input() url: string = '';
  @Input() image: string = 'https://via.placeholder.com/150';


}
