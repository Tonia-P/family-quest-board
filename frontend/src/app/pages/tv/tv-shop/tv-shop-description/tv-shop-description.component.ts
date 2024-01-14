import { Component, Input } from '@angular/core';
import { Item } from 'src/app/pages/shared/interfaces/item';

@Component({
  selector: 'app-tv-shop-description',
  templateUrl: './tv-shop-description.component.html',
  styleUrls: ['./tv-shop-description.component.scss']
})
export class TvShopDescriptionComponent {

  @Input() item: Item = {
    _id: "2",
    name: 'Alpha potion',
    description: 'AAAAAAAAAAA',
    price: 200,
    selected: false
  }
}
