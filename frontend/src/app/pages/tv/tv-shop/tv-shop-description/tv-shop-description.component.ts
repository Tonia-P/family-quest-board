import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { Location } from '@angular/common';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from 'src/app/pages/shared/interfaces/item';

import { ItemsService } from 'src/app/global/services/item-shop/item.service';

@Component({
  selector: 'app-tv-shop-description',
  templateUrl: './tv-shop-description.component.html',
  styleUrls: ['./tv-shop-description.component.scss']
})
export class TvShopDescriptionComponent {

  @Input() id: string | null = null;

  @Input() item: Item = {
    _id: "2",
    name: 'Alpha potion',
    description: 'AAAAAAAAAAA',
    price: 200,
    selected: false,
    image: 'console',
    sold: false
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private socketService: SocketsService,
    private itemService: ItemsService,
    private shopsService: ShopsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.socketService.subscribe("Item_Selected", (data: any) => {
      const shopId = this.id as string;
      this.getItemById(shopId, data);
      
    });
    this.socketService.subscribe("ItemSold", (data: any) => {

    });
  }

  private getItemById(shopId: string, itemId: string): void {
    this.shopsService.getItemById(shopId, itemId).subscribe((result) => {
      console.log(result);
      this.item = result;

    });
  }

}
