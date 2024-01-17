import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() selectedFlag: EventEmitter<Item> =   new EventEmitter();

  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  

  ngOnInit(): void {
  }

  onSelect(): void{
    this.selectedFlag.emit(this.item)
  }
}
