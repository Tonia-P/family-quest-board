import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quest } from '../interfaces/quest';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.scss']
})
export class QuestItemComponent {
  
  @Input() isMobile: string = " ";

  @Input() quest: Quest = {
    _id: "9",
    title: "Example in quest item in shared",
    type: "daily",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing el
    sed do eiusmod tempor incididunt ut labore et dolore magna al
    la.`,
    difficulty: 1,
    reward: 50,
    participants:[
      'daughter',
      'son'
    ],
    deadline: "2024-3-1"
  }

  @Output() questClicked = new EventEmitter<void>();
  
  onClick() {
    this.questClicked.emit();
  }
}
