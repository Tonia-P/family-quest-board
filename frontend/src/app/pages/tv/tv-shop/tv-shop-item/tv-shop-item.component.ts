import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  
  public changeParams() {
    const queryParams: Params = { "itemid":  this.item._id};
  console.log(queryParams)
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams,
        replaceUrl: true,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    );
  }

  ngOnInit(): void {
  }

  onParamClick() {
    this.changeParams()
  }
}
