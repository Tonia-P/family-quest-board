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

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
    });
    this.activatedRoute.queryParamMap.subscribe( params=>{
      this.selected_id = params.get('selected')
      console.log(this.selected_id)
    }
      )
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
