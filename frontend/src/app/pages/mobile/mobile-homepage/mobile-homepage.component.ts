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
    this.getAllDailyQuests();
    this.getAllCompletedQuests("657c66904bff912c74f817d6");

    // Susbcribe to socket event and set callback
    this.socketService.subscribe("tasks_update", (data: any) => {
      this.getAllDailyQuests();
      this.getAllCompletedQuests("657c66904bff912c74f817d6");
    });

  }

  private getAllDailyQuests(): void {
    this.tasksService.getAll().subscribe((result) => {
      console.log(result);

      this.quests = result.filter(result =>  ((result.type === 'daily' || this.isToday(result.deadline))) && result.participants.some((participant) => participant === 'mother'));
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