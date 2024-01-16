import { Component, Input, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
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

  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllDailyQuests();

    // Susbcribe to socket event and set callback
    this.socketService.subscribe("tasks_update", (data: any) => {
      this.getAllDailyQuests();
    });

  }

  private getAllDailyQuests(): void {
    this.tasksService.getAll().subscribe((result) => {
      console.log(result);

      this.quests = result.filter(result =>  (result.type === 'daily' || this.isToday(result.deadline)));
      console.log(this.quests);
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