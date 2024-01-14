import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/pages/shared/interfaces/item';

@Component({
  selector: 'app-tv-shop-item',
  templateUrl: './tv-shop-item.component.html',
  styleUrls: ['./tv-shop-item.component.scss']
})
export class TvShopItemComponent implements OnInit {

  @Input() item: Item = {
    _id: "2",
    name: 'Alpha potion',
    description: 'AAAAAAAAAAA',
    price: 200,
    selected: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
