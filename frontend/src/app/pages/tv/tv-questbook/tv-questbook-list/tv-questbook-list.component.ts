import { Component, Input, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { Quest } from 'src/app/pages/shared/interfaces/quest';

@Component({
  selector: 'app-tv-questbook-list',
  templateUrl: './tv-questbook-list.component.html',
  styleUrls: ['./tv-questbook-list.component.scss']
})
export class TvQuestbookListComponent implements OnInit {

  @Input() quests: Quest[] = [];

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
    deadline: "2024-1-2"
  }
  
  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService
  ) { }

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

}
