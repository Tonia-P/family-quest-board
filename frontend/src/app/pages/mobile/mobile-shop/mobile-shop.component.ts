import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';
import { User } from 'src/app/pages/shared/interfaces/user';
import { UserModel } from 'src/app/global/models/users/user.model';

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

  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};

  @Input() id: string | null = null;
  @Input() itemid: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService, private userService: UsersService) { }

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

  onBuyClick(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    const stringId: string = this.id as string; 
  }

  private getItemById(shopId: string, itemId: string): void {
    this.shopsService.getItemById(shopId, itemId).subscribe((result) => {
      console.log(result);
      this.selectedItem = result;

      this.getCustomer("65a8717c934d8c082c765f6c");
    });
  }

  private getCustomer(userId: string): void {
    this.userService.getById(userId).subscribe((result) => {
      console.log(result);
      this.user = result;

      this.buyItem(this.user, this.selectedItem);
    });
  }

  private buyItem(user: User, item: Item): void {
    const data = new UserModel();
    data._id = user._id;
    data.coins = user.coins - item.price;
    if(data._id && data.coins && data.coins >= 0){
      this.userService.update(data).subscribe((result) => {
        console.log(result);
        this.user = result;
        
        const shopId = this.id as string;
        this.updateItemToSold(shopId, item._id);
      });
    }
  }

  private updateItemToSold(shopId: string, id: string): void {
    this.shopsService.updateItem(shopId, id).subscribe((result) => {
      console.log(result);
      this.selectedItem = result;

      this.pingOtherDevicesForItemSell(shopId, id);

      document.location.href = 'http://localhost:59816/mobile/shoplist';
    });
  }

  private pingOtherDevicesForItemSell(shopId: string, itemId: string): void {
    const data = {
        event: "Item_Bought",
        message: {shopId: shopId, itemId: itemId}
    };

    console.log(data);
    this.tasksService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }

}
