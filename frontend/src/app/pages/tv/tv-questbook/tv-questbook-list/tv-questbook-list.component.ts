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

  }

  private getAllTasks(): void {
    this.tasksService.getAll().subscribe((result) => {
      console.log(result);
      this.quests = result;
    });
  }

}
