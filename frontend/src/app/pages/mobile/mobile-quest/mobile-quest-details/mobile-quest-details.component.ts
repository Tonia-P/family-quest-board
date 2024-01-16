import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quest } from 'src/app/pages/shared/interfaces/quest';

@Component({
  selector: 'app-mobile-quest-details',
  templateUrl: './mobile-quest-details.component.html',
  styleUrls: ['./mobile-quest-details.component.scss']
})
export class MobileQuestDetailsComponent {

  @Input() id: string | null = null;
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
    deadline: "17-01-2002"
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
