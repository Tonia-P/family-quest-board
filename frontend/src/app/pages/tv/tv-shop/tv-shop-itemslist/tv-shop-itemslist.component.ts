import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/pages/shared/interfaces/item';

@Component({
  selector: 'app-tv-shop-itemslist',
  templateUrl: './tv-shop-itemslist.component.html',
  styleUrls: ['./tv-shop-itemslist.component.scss']
})
export class TvShopItemslistComponent implements OnInit {

  @Input() items: Item[] = [{
    _id: "2",
    name: 'Alpha potion',
    description: 'AAAAhuihiuAAAAAAA',
    price: 200,
    selected: false,
    image: 'console'
  }]
  constructor() { }


  ngOnInit(): void {
    
  }

  // ngOnInit(): void {
  //   this.getAllTasks();

  //   // Susbcribe to socket event and set callback
  //   this.socketService.subscribe("tasks_update", (data: any) => {
  //     this.getAllTasks();
  //   });
  // }

  // private getAllTasks(): void {
  //   this.tasksService.getAll().subscribe((result) => {
  //     this.quests = result;
  //   });
  // }

}
