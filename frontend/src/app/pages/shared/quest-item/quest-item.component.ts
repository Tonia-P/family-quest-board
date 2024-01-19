import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quest } from '../interfaces/quest';
import { Router, ActivatedRoute } from '@angular/router';

import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { Location } from '@angular/common';
import { TaskModel } from 'src/app/global/models/tasks/task.model';
import { UserModel } from 'src/app/global/models/users/user.model';
import { User } from 'src/app/pages/shared/interfaces/user';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.scss']
})
export class QuestItemComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private userService: UsersService, private location: Location) { }
  
  @Input() device: string = " ";

  @Input() id: string | null = null;

  @Input() quest: Quest = {
    _id: "9",
    title: "Example in quest item in shared",
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

  @Output() questClicked = new EventEmitter<void>();

  
  
  onClick() {
    this.questClicked.emit();
  }

  goToView() {
    if (!(this.device === "table")){
      this.router.navigate(['/' + this.device + '/view', this.quest._id], { relativeTo: this.activatedRoute, queryParams: { id: this.quest._id } });

    }
   }

   onClickShowTv(){
    this.BroadcastOnTv(this.quest._id);
   }

   private BroadcastOnTv(taskId: string): void {
    const data = {
        event: "BroadcastOnTv",
        message: {taskId: taskId}
    };

    console.log(data);
    this.tasksService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }
}
