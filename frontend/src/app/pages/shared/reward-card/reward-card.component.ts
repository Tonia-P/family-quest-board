import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reward-card',
  templateUrl: './reward-card.component.html',
  styleUrls: ['./reward-card.component.scss']
})
export class RewardCardComponent {
  @Input() amount: number = 999;
  @Input() image: string = "dia";
  @Input() color: string = "blue";
  @Input() device: string = " ";
 
  constructor() { 
     
  }
 
  ngOnInit(): void {
  }
 
}
