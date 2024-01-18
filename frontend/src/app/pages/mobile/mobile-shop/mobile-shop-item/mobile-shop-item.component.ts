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
import { ItemModel } from 'src/app/global/models/items/item.model';

@Component({
  selector: 'app-mobile-shop-item',
  templateUrl: './mobile-shop-item.component.html',
  styleUrls: ['./mobile-shop-item.component.scss']
})
export class MobileShopItemComponent {

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService, private userService: UsersService) { }

  @Input() item: Item = {
    _id: "5",
    name: "Iphone XR",
    description: "This is a iPhone XR, the latest model of Iphones.",
    price: 899.00,
    selected: false,
    image: "console",
    sold: false
  }

  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};

  @Input() id: string | null = null;
  @Input() itemid: string | null = null;

  onBuyClick(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    const shopId: string = this.id as string; 
    const itemId: any = this.item._id as string;
    this.getItemByIdForSell(shopId, itemId);
  }

  private getItemByIdForSell(shopId: string, itemId: string): void {
    this.shopsService.getItemById(shopId, itemId).subscribe((result) => {
      console.log(result);
      this.item = result;

      this.getCustomer("65a8717c934d8c082c765f6c", this.item);
    });
  }

  private getCustomer(userId: string, item: Item): void {
    this.userService.getById(userId).subscribe((result) => {
      console.log(result);
      this.user = result;

      this.buyItem(this.user, item);
    });
  }

  private buyItem(user: User, item: Item): void {
    
    const data = new UserModel();
    data._id = user._id;
    data.coins = user.coins - item.price;
    if(data._id && data.coins && data.coins >= 0){
      this.userService.update(data).subscribe((result) => {
        console.log("HERE");
        console.log(result);
        this.user = result;
        
        console.log("HERE");
        const shopId = this.id as string;
        const itemId = item._id as string;
        const body = {
          sold: true
        }
        console.log(itemId, body);
        this.updateItemToSold(shopId, itemId, body);
      });
    }
    else{
      console.log("YOU DO NOT HAVE ENOUGH MONEY");
    }
  }

  private updateItemToSold(shopId: string, itemId: string,  item: any): void {
    this.shopsService.updateItem(shopId, itemId, item).subscribe((result) => {
      console.log(result);
      this.item = result;

      this.pingOtherDevicesForItemSell(shopId, item._id);
      
      document.location.reload();
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

  private pingOtherDevicesForItemBroadcast(shopId: string, itemId: string): void {
    const data = {
        event: "Item_Broadcast",
        message: {shopId: shopId, itemId: itemId}
    };

    console.log(data);
    this.shopsService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
      this.pingOtherShopForDetails(shopId, itemId);
    });
  }
  private pingOtherShopForDetails(shopId: string, itemId: string): void {
    const data = {
        event: "ShowItemDetails",
        message: {shopId: shopId, itemId: itemId}
    };

    console.log(data);
    this.shopsService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }

  showOnTV(): void{
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    const shopId: string = this.id as string; 
    const itemId: any = this.item._id as string;
    this.pingOtherDevicesForItemBroadcast(shopId, itemId);
  }
}
