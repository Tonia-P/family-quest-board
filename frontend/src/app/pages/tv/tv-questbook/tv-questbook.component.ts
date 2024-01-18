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
import { Quest } from 'src/app/pages/shared/interfaces/quest';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tv-questbook',
  templateUrl: './tv-questbook.component.html',
  styleUrls: ['./tv-questbook.component.scss']
})
export class TvQuestbookComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService, private userService: UsersService) { }

    @Input() quest: Quest = {
      _id: "9",
      title: "Kapp Kapp",
      type: "daily",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing el
      sed do eiusmod tempor incididunt ut labore et dolore magna al
      la.`,
      difficulty: 1,
      reward: 50,
      participants:[
        'daughter',
        'son'
      ],
      deadline: "2024-3-1",
      completed: false
    }

  ngOnInit(): void {
    console.log(window.location.pathname);
    this.socketService.subscribe("BroadcastOnTv", (data: any) => {
      console.log('ON HOME');
      console.log(data);
      const taskId = data?.taskId;
      this.pingOtherDevicesForTask(taskId);
    });
    this.socketService.subscribe("Item_Broadcast", (data: any) => {
      console.log('ON HOME');
      console.log(data);
      const shopid = data?.shopId;
      const itemId = data?.itemId;
      this.router.navigate(['/tv/shop/' + shopid], {queryParams: {selected: itemId}});
    });
    
  }

  private pingOtherDevicesForTask(taskId: string): void {
    const data = {
        event: "Task_Selected",
        message: taskId
    };

    console.log(data);
    this.tasksService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }

}
