import { Component, OnInit, Input } from '@angular/core';
import { Quest } from 'src/app/pages/shared/interfaces/quest';
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

  @Input() quest: Quest = {
    _id: "9",
    title: "Kapp Kapp",
    type: "daily",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing el
    sed do eiusmod tempor incididunt ut labore et dolore magna al
    la.`,
    difficulty: 1,
    reward: 50,
    participants:[
      'daughter',
      'son'
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
