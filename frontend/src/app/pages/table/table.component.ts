import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { Quest } from 'src/app/pages/shared/interfaces/quest';
import { Location } from '@angular/common';
import { TaskModel } from 'src/app/global/models/tasks/task.model';
import { UserModel } from 'src/app/global/models/users/user.model';
import { User } from 'src/app/pages/shared/interfaces/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() quests: Quest[] = [];
  @Input() id: string | null = null;
  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};
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
    deadline: "2024-1-2",
    completed: false,
  }

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private userService: UsersService, private location: Location) { }

  ngOnInit(): void {
    this.getAllTasks();
    // Susbcribe to socket event and set callback
    this.socketService.subscribe("tasks_update", (data: any) => {
      this.getAllTasks();
    });

    this.socketService.subscribe("Task_Selected", (data: any) => {
      this.getTaskById(data);
    });

  }

  private getAllTasks(): void {
    this.tasksService.getAll().subscribe((result) => {
      console.log(result);
      this.quests = result;
    });
  }

  private getTaskById(taskId: string): void {
    this.tasksService.getById(taskId).subscribe((result) => {
      console.log(result);
      this.quest = result;
    });
  }

  onUserDrop(){
    const id = this.id as string;
    console.log(id);
    this.getTaskByIdForAssign(id);
  }

  private getTaskByIdForAssign(taskId: string): void {
    this.tasksService.getById(taskId).subscribe((result) => {
      console.log(result);
      this.quest = result;

      this.assignUserOnQuest("65a8717c934d8c082c765f6c", this.quest._id);
    });
  }

  private assignUserOnQuest(user: string, taskId: string):void {
    this.tasksService.addParticipant(taskId, user).subscribe((result) => {
      console.log(result);
      this.quest = result;

      this.assignToUser(this.quest._id);

    });
  }

  private assignToUser(taskId: string):void {
    this.userService.createQuest("65a8717c934d8c082c765f6c", taskId).subscribe((result) => {
      console.log(result);
      this.user = result;
    });
  }


}
