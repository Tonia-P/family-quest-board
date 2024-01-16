import { Component, Input, OnInit } from '@angular/core';

import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { UsersService } from 'src/app/global/services/users/users.service';
import { User } from 'src/app/pages/shared/interfaces/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tv-header-currency',
  templateUrl: './tv-header-currency.component.html',
  styleUrls: ['./tv-header-currency.component.scss']
})
export class TvHeaderCurrencyComponent implements OnInit {

  
  @Input() user: User = {_id: '', name: '', coins: 0, quests: [], parent: false};

  @Input() coins: number = 0;

  constructor(private usersService: UsersService,
    private socketService: SocketsService,
    private location: Location) { }

  ngOnInit(): void {

  }

}
