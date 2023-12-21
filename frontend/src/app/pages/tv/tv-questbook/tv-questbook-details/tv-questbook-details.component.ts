import { Component, OnInit, Input } from '@angular/core';
import { GameButtonComponent } from 'src/app/pages/shared/game-button/game-button.component';
@Component({
  selector: 'app-tv-questbook-details',
  templateUrl: './tv-questbook-details.component.html',
  styleUrls: ['./tv-questbook-details.component.scss']
})
export class TvQuestbookDetailsComponent implements OnInit {

  @Input() title: string = "Quest title here";
  @Input() desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nunc gravida risus blandit. Lorem duis scelerisque risus convallis tempor velit dis. Lorem duis scelerisque r isus convallis tempor velit dis.";
  @Input() dificulty: number = 1;
  @Input() participants: object = {};

  constructor() { }

  ngOnInit(): void {
  }

  onButtonCLick(){
    console.log("Kappa")
  }
}
