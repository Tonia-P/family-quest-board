import { Component, OnInit, Input } from '@angular/core';
import { GameButtonComponent } from 'src/app/pages/shared/game-button/game-button.component';
import { Quest } from 'src/app/pages/shared/interfaces/quest';
@Component({
  selector: 'app-tv-questbook-details',
  templateUrl: './tv-questbook-details.component.html',
  styleUrls: ['./tv-questbook-details.component.scss']
})
export class TvQuestbookDetailsComponent implements OnInit {

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

  onButtonCLick(){
    console.log("Kappa")
  }
}
