import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from 'src/app/pages/shared/interfaces/item';

import { ItemsService } from 'src/app/global/services/item-shop/item.service';

@Component({
  selector: 'app-tv-shop-item',
  templateUrl: './tv-shop-item.component.html',
  styleUrls: ['./tv-shop-item.component.scss']
})
export class TvShopItemComponent implements OnInit {

  
  @Input() item: Item = {
    _id: "2",
    name: 'Alpha potion, Beta potion, Gamma potion, Kappa potion!',
    description: 'AAAAAAAAAAA',
    price: 200,
    selected: false,
    image: 'console'
  }
  @Output() selectedFlag: EventEmitter<Item> =   new EventEmitter();

  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private socketService: SocketsService,
    private itemService: ItemsService
  ) { }
  

  ngOnInit(): void {
    this.socketService.subscribe("Item_Sold", (data: any) => {
      
    });
    this.socketService.subscribe("Mobile_Selected", (data: any) => {
      this.router.navigate(['/tv/questbook'], { relativeTo: this.activatedRoute});
    });
  }

  onClick(): void{
    const data = {
      event: "Item_Selected",
      message: this.item._id
    };
    this.pingOtherDevicesForTask(data);
  }

  private pingOtherDevicesForTask(data: any): void {
    console.log(data);
    this.itemService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }
}
