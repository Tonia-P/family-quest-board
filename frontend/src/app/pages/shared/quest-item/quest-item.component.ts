import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quest } from '../interfaces/quest';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.scss']
})
export class QuestItemComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
  @Input() device: string = " ";

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
    deadline: "2024-3-1",
    completed: false 
  }

  @Output() questClicked = new EventEmitter<void>();
  
  onClick() {
    this.questClicked.emit();
  }

  goToView() {
    this.router.navigate(['/mobile/view', this.quest._id], { relativeTo: this.activatedRoute, queryParams: { id: this.quest._id } });
   }

}
