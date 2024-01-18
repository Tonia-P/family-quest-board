import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';

import { ItemsService } from 'src/app/global/services/item-shop/item.service';

@Component({
  selector: 'app-tv-shop',
  templateUrl: './tv-shop.component.html',
  styleUrls: ['./tv-shop.component.scss']
})
export class TvShopComponent implements OnInit {

  
  @Input() shopItems: Item[] = [{
    _id: "2",
    name: 'Beta potion',
    description: 'AAAAhuihiuAAAAAAA',
    price: 200,
    selected: false,
    image: 'console',
    sold: false
  },
  {
    _id: "7",
    name: 'Gamma potion',
    description: 'hhh',
    price: 400,
    selected: false,
    image: 'console',
    sold: false
  }];
  @Input() selectedItem: Item = {
      _id: "2",
      name: 'Beta potion',
      description: 'AAAAhuihiuAAAAAAA',
      price: 200,
      selected: false,
      image: 'console',
      sold: false
    
  }
  @Input() id: string | null = null;
  @Input() itemid: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService, private itemService: ItemsService,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    const shopId = this.id as string;
    this.getAllItemsOfShop(shopId);
    this.socketService.subscribe("Item_Broadcast", (data: any) => {
      console.log(data);
      if(data.shopId !== shopId) {
        console.log(data);
        const shopid = data?.shopId;
        document.location.href = 'http://localhost:59816/tv/shop/' + shopid;
      }
      else{
        console.log(data);
        this.pingOtherDevicesForTask(data);
      }
    });
  }

  private getAllItemsOfShop(shopId: string): void {
    this.shopsService.getAllItems(shopId).subscribe((result) => {
      console.log(result);
      this.shopItems = result;

    });
  }

  private pingOtherDevicesForTask(data: any): void {
    console.log(data);
    this.itemService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }

}
