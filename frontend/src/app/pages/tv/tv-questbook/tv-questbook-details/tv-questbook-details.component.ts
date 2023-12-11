import { Component, OnInit } from '@angular/core';
import { GameButtonComponent } from 'src/app/pages/shared/game-button/game-button.component';
@Component({
  selector: 'app-tv-questbook-details',
  templateUrl: './tv-questbook-details.component.html',
  styleUrls: ['./tv-questbook-details.component.scss']
})
export class TvQuestbookDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onButtonCLick(){
    console.log("Kappa")
  }
}
