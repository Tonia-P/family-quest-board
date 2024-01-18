import { Component, Input } from '@angular/core';
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
  selector: 'app-mobile-quest-details',
  templateUrl: './mobile-quest-details.component.html',
  styleUrls: ['./mobile-quest-details.component.scss']
})
export class MobileQuestDetailsComponent {

  @Input() id: string | null = null;
  @Input() isAssign: boolean = false;
  @Input() isComplete: boolean = false;

  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};

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
    this.getTaskByIdCheckComplete(stringId);
  }

  private getTaskById(taskId: string): void {
    this.userService.getQuestsById("65a8717c934d8c082c765f6c", taskId).subscribe((result) => {
      console.log(result);
      this.quest = result;
    });
  }


  private getTaskByIdCheckComplete(taskId: string): void {
    this.userService.getQuestsById("65a8717c934d8c082c765f6c", taskId).subscribe((result) => {
      console.log(result);
      this.quest = result;
      console.log("COMPLETED: " + result.completed);
      if(result.completed === true){
        console.log("COMPLETED");
        this.isComplete = true;
        this.isAssign = false;
      }
      else{
        this.getUserForCheckAssign("65a8717c934d8c082c765f6c");
      }
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

  private getUserForCheckAssign(id: string) :void{
    this.userService.getById(id).subscribe((result) => {
      console.log(result);
      this.user = result;
      console.log(this.user.name);
      const currentQuest = this.quest.participants.includes(this.user.name);
      console.log(currentQuest);
      if(currentQuest === true){
        this.isAssign = true;
      }
      else{
        this.isAssign = false;
      }
    });
  }

  private getAllQuestsForUpdate(id: string): void{
    this.userService.getAllQuests(id).subscribe((result) => {
      console.log(result);
      this.quests = result.filter(task => task.title === this.quest.title);
      if(this.quests){
        console.log("here");
        const questId = this.quests[0]._id;
        const body = {
          completed: true
        }

        this.completeTask("65a8717c934d8c082c765f6c", questId, body);
        this.getUserAfterComplete("65a8717c934d8c082c765f6c");
      }
    });
  }

  private updateUserAfterComplete(data: any){
    console.log(data);
    this.userService.update(data).subscribe((result) =>{
      console.log(result);
    });
  }

  private getUserAfterComplete(id: any){
    this.userService.getById(id).subscribe((result) =>{
      console.log(result);
      result.coins += this.quests[0].reward;
      console.log(result);
      const updatedUser = new UserModel();
      updatedUser._id =  result._id;
      updatedUser.coins = result.coins;
      this.updateUserAfterComplete(updatedUser);
      document.location.href = 'http://localhost:59816/mobile/home';
    });
  }


  onCompleteButtonCLick(): void {
    const id = this.id as string;
    console.log(id);
    this.getTaskById(id);
    this.getAllQuestsForUpdate("65a8717c934d8c082c765f6c");
  }
  
}
