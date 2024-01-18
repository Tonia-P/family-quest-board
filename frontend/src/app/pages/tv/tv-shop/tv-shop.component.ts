import { Component, Input, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';

import { ActivatedRoute, Router } from '@angular/router';

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
    description: `This is a Beta Potion which will increase your character's strength by
    10% for ${3600 / 10} minutes.`,
    price: 200,
    selected: false,
    image: 'food',
    sold: false
  },
  {
    _id: "2",
    name: 'Alpha potion, Beta potion, Gamma potion, Kappa potion!',
    description: 'Kappa Keepo Kappo',
    price: 200,
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
  @Input() selected_id: string | null = null;
  @Input() itemid: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService, private itemService: ItemsService,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
    });
    this.activatedRoute.queryParamMap.subscribe( params=>{
      this.selected_id = params.get('selected');
    });
    console.log(this.id);
    console.log(this.selected_id);
    const shopId = this.id as string;
    this.getAllItemsOfShop(shopId);
    this.socketService.subscribe("Item_Broadcast", (data: any) => {
      console.log(data);
      const shopid = data?.shopId;
      const itemId = data?.itemId;
      if(shopId !== this.id){
        this.router.navigate(['/tv/shop/' + shopid], {queryParams: {selected: itemId}});
      }
      else{
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
    const body = {
      event: "Item_Selected",
      message: data.itemId
    };

    console.log(body);
    this.itemService.pingOtherDevicesForTask(body).subscribe((result) => {
      console.log(result);
    });
  }

}
