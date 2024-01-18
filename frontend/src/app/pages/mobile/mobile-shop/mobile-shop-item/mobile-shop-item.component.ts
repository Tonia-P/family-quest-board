import { Component, Input } from '@angular/core';
import { Item } from 'src/app/pages/shared/interfaces/item';

@Component({
  selector: 'app-mobile-shop-item',
  templateUrl: './mobile-shop-item.component.html',
  styleUrls: ['./mobile-shop-item.component.scss']
})
export class MobileShopItemComponent {

  @Input() item: Item = {
    _id: "5",
    name: "Iphone XR",
    description: "This is a iPhone XR, the latest model of Iphones.",
    price: 899.00,
    selected: false,
    image: "console"
  }

  buyItem(): void{

  }

  showOnTV(): void{
    
  }
}
