import { Component, Input } from '@angular/core';
import { Shop } from 'src/app/pages/shared/interfaces/shop';

@Component({
  selector: 'app-mobile-shopslist-item',
  templateUrl: './mobile-shopslist-item.component.html',
  styleUrls: ['./mobile-shopslist-item.component.scss']
})
export class MobileShopslistItemComponent {
  @Input() shop: Shop = {
    _id: "2",
    name: "Supermercado Tottus",
    items: [],
    owner: "Kappa"
  };
}

