import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';

@Component({
  selector: 'app-tv-shop',
  templateUrl: './tv-shop.component.html',
  styleUrls: ['./tv-shop.component.scss']
})
export class TvShopComponent implements OnInit {

  
  @Input() id: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
