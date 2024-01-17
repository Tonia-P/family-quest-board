import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { Quest } from 'src/app/pages/shared/interfaces/quest';
import { Location } from '@angular/common';
import { TaskModel } from 'src/app/global/models/tasks/task.model';

@Component({
  selector: 'app-mobile-quest-details',
  templateUrl: './mobile-quest-details.component.html',
  styleUrls: ['./mobile-quest-details.component.scss']
})
export class MobileQuestDetailsComponent {

  @Input() id: string | null = null;
  @Input() quests: TaskModel[] = [];
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
    private socketService: SocketsService, private userService: UsersService, private location: Location) { }

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

  
  private completeTask(userId: string, taskId: string, task: any): void {
    console.log("quests");
    console.log(this.quests);
    this.userService.updateQuest(userId, taskId, task).subscribe((result) => {
      console.log(result);
      this.quest = result;
    });
  }

  private getAllQuestsForUpdate(id: string): void{
    this.userService.getAllQuests(id).subscribe((result) => {
      console.log(result);
      console.log(this.quest);
      this.quests = result.filter(task => task.title === this.quest.title);
      console.log(this.quests);
      if(this.quests){
        console.log("here");
        const questId = this.quests[0]._id;
        const body = {
          completed: true
        }

        this.completeTask("657c66904bff912c74f817d6", questId, body);
      }
    });
    this.location.back();
  }


  onCompleteButtonCLick(): void {
    const id = this.id as string;
    console.log(id);
    this.getTaskById(id);
    this.getAllQuestsForUpdate("657c66904bff912c74f817d6");
  }
  
}
