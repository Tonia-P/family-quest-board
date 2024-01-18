import { Component, Input, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { Quest } from 'src/app/pages/shared/interfaces/quest';
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-homepage',
  templateUrl: './mobile-homepage.component.html',
  styleUrls: ['./mobile-homepage.component.scss']
})
export class MobileHomepageComponent {
  
  @Input() quests: Quest[] = [];
  @Input() filteredQuests: Quest[] = [];
  @Input() completed_quests: Quest[] = [];

  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getAllDailyQuests("65a8717c934d8c082c765f6c");
    this.getAllCompletedQuests("65a8717c934d8c082c765f6c");

    // Susbcribe to socket event and set callback
    this.socketService.subscribe("tasks_update", (data: any) => {
      this.getAllDailyQuests("65a8717c934d8c082c765f6c");
      this.getAllCompletedQuests("65a8717c934d8c082c765f6c");
    });

  }

  private getAllDailyQuests(id: string): void {
    this.userService.getAllQuests(id).subscribe((result) => {
      console.log(result);
      this.quests = result.filter(result =>  ((result.type === 'daily' || this.isToday(result.deadline)) && result.completed === false));
      console.log(this.quests);
    });
  }

  private getAllCompletedQuests(userId: string): void {
    this.userService.getAllQuests(userId).subscribe((result) => {
      console.log(result);

      this.completed_quests = result.filter(result =>  result.completed === true && result.participants.some((participant) => participant === 'mother'));
      console.log(this.completed_quests);
    });
  }

  private isToday(deadline: string): boolean {
    const today = new Date().toISOString().split('T')[0]; // Get current date as string in "YYYY-MM-DD" format
    return deadline === today;
  }

  goToAdd() {
    this.router.navigate(['/mobile/add'], { relativeTo: this.activatedRoute});
   }

}