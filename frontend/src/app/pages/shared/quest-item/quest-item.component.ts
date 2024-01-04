import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.scss']
})
export class QuestItemComponent {
  @Input() title: string = "Title";
  @Input() participants: string[] = ['[ ]', '[ ]'];
  @Input() rewards: string[] = ['[ ]', '[ ]'];
  @Input() type: string = 'daily';
  @Input() isMobile: boolean = true;

  @Output() questClicked = new EventEmitter<void>();
  
  onClick() {
    this.questClicked.emit();
  }
}
