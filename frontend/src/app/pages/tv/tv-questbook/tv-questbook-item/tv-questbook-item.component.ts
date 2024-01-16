import { Component, OnInit, Input } from '@angular/core';
import { Quest } from 'src/app/pages/shared/interfaces/quest';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { RewardCardComponent } from 'src/app/pages/shared/reward-card/reward-card.component';
@Component({
  selector: 'app-tv-questbook-item',
  templateUrl: './tv-questbook-item.component.html',
  styleUrls: ['./tv-questbook-item.component.scss']
})
export class TvQuestbookItemComponent implements OnInit {

  @Input() title: string = "Quest title here";
  @Input() participants: object = {};
  @Input() rewards: object = {};

  @Input() quests: Quest[] = [];
  
  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService
  ) { }

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

    // Susbcribe to socket event and set callback
    this.socketService.subscribe("tasks_update", (data: any) => {
      this.getAllTasks();
    });
  }

  onButtonCLick(){
    this.pingOtherDevicesForTask();
  }

  private getAllTasks(): void {
    this.tasksService.getAll().subscribe((result) => {
      console.log(result);
      this.quests = result;
      this.quest = result[0];
    });
  }

  private pingOtherDevicesForTask(): void {
    const data = {
        event: "Task_Selected",
        message: this.quest._id
    };

    console.log(data);
    this.tasksService.pingOtherDevicesForTask(data).subscribe((result) => {
      console.log(result);
    });
  }

}
