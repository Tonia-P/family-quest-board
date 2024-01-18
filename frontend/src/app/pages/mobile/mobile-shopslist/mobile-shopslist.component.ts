import { Component, Input } from '@angular/core';
import { Shop } from '../../shared/interfaces/shop';

@Component({
  selector: 'app-mobile-shopslist',
  templateUrl: './mobile-shopslist.component.html',
  styleUrls: ['./mobile-shopslist.component.scss']
})
export class MobileShopslistComponent {

  @Input() shops: Shop[] = [{
    _id: "2",
    items: [],
    owner: "Daddy",
    name: "Kebab House"
  }];
}
