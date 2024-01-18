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
  selector: 'app-mobile-questbook',
  templateUrl: './mobile-questbook.component.html',
  styleUrls: ['./mobile-questbook.component.scss']
})
export class MobileQuestbookComponent {

  @Input() daily_quests: Quest[] = [];
  @Input() weekly_quests: Quest[] = [];
  @Input() onetime_quests: Quest[] = [];
  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};
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
      this.getAllQuests();
      
    }

    private getAllQuests():void{
      this.tasksService.getAll().subscribe(result => {
        console.log(result);
        this.daily_quests = result.filter(tasks => tasks.type === 'daily');
        this.weekly_quests = result.filter(tasks => tasks.type === 'weekly');
        this.onetime_quests = result.filter(tasks => tasks.type === 'onetime');

      });
    }
  
}
