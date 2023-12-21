import { Component, OnInit, Input } from '@angular/core';
import { RewardCardComponent } from 'src/app/pages/shared/reward-card/reward-card.component';
@Component({
  selector: 'app-tv-questbook-item',
  templateUrl: './tv-questbook-item.component.html',
  styleUrls: ['./tv-questbook-item.component.scss']
})
export class TvQuestbookItemComponent implements OnInit {

  @Input() title: string = "Quest title here";
  @Input() participants: object = {};
  @Input() rewards: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
