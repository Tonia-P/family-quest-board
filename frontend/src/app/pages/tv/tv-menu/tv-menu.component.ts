import { Component, Input, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';
import { User } from 'src/app/pages/shared/interfaces/user';
import { UserModel } from 'src/app/global/models/users/user.model';
import { ItemModel } from 'src/app/global/models/items/item.model';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-tv-menu',
  templateUrl: './tv-menu.component.html',
  styleUrls: ['./tv-menu.component.scss'],
})
export class TvMenuComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService, private userService: UsersService) { }

  ngOnInit(): void {
    this.socketService.subscribe("Item_Broadcast", (data: any) => {
      console.log('ON HOME');
      console.log(data);
      const shopid = data?.shopId;
      const itemId = data?.itemId;
      this.router.navigate(['/tv/shop/' + shopid], {queryParams: {selected: itemId}});
    });
  }

}
