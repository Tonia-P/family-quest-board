import { Component, Input, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { User } from 'src/app/pages/shared/interfaces/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {

  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};

  constructor(
    private usersService: UsersService,
    private socketService: SocketsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUserById("65a8717c934d8c082c765f6c");
    console.log("user loaded");
    this.socketService.subscribe("User_update", (data: any) => {
      this.getUserById("65a8717c934d8c082c765f6c");
    });
  }

  private getUserById(userId: string): void {
    this.usersService.getById(userId).subscribe((result) => {
      console.log(result);
      this.user = result;
    });
  }

  goBack() {
    this.location.back();
  }
}
