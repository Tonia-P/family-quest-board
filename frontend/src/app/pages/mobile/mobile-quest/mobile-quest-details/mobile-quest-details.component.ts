import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { Quest } from 'src/app/pages/shared/interfaces/quest';

@Component({
  selector: 'app-mobile-quest-details',
  templateUrl: './mobile-quest-details.component.html',
  styleUrls: ['./mobile-quest-details.component.scss']
})
export class MobileQuestDetailsComponent {

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
    deadline: "2002-1-17",
    completed: false
  }

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    const stringId: string = this.id as string; 
    this.getTaskById(stringId);
  }

  private getTaskById(taskId: string): void {
    this.tasksService.getById(taskId).subscribe((result) => {
      console.log(result);
      this.quest = result;
    });
  }

}
