import { Component, Input } from '@angular/core';
import { Quest } from '../../shared/interfaces/quest';

@Component({
  selector: 'app-mobile-questbook',
  templateUrl: './mobile-questbook.component.html',
  styleUrls: ['./mobile-questbook.component.scss']
})
export class MobileQuestbookComponent {

  @Input() daily_quests: Quest[] = [];
  @Input() weekly_quests: Quest[] = [];
  @Input() onetime_quests: Quest[] = [];

  
}
