import { Component, Input } from '@angular/core';
import { Item } from '../../shared/interfaces/item';

@Component({
  selector: 'app-mobile-shop',
  templateUrl: './mobile-shop.component.html',
  styleUrls: ['./mobile-shop.component.scss']
})
export class MobileShopComponent {

  @Input() shopItems: Item[] = [{
    _id: "2",
    name: 'Beta potion',
    description: 'AAAAhuihiuAAAAAAA',
    price: 200,
    selected: false
  },
  {
    _id: "7",
    name: 'Gamma potion',
    description: 'hhh',
    price: 400,
    selected: false
  }];
  @Input() selectedItem: Item = {
      _id: "2",
      name: 'Beta potion',
      description: 'AAAAhuihiuAAAAAAA',
      price: 200,
      selected: false
    
  }
}
