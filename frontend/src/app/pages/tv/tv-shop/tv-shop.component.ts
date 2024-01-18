import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';

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
    image: 'console'
  },
  {
    _id: "7",
    name: 'Gamma potion',
    description: 'hhh',
    price: 400,
    selected: false,
    image: 'console'
  }];
  @Input() selectedItem: Item = {
      _id: "2",
      name: 'Beta potion',
      description: 'AAAAhuihiuAAAAAAA',
      price: 200,
      selected: false,
      image: 'console'
    
  }
  @Input() id: string | null = null;
  @Input() itemid: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    const shopId = this.id as string;
    this.getAllItemsOfShop(shopId);
  }

  private getAllItemsOfShop(shopId: string): void {
    this.shopsService.getAllItems(shopId).subscribe((result) => {
      console.log(result);
      this.shopItems = result;

    });
  }

}
