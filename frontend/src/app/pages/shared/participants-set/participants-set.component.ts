import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participants-set',
  templateUrl: './participants-set.component.html',
  styleUrls: ['./participants-set.component.scss', ],
})
export class ParticipantsSetComponent {
  @Input() images: string[];

  constructor() {
    this.images = [
      '../../../../assets/family/dad.png',
      '../../../../assets/family/mother.png',
      '../../../../assets/family/daughter.png',
      '../../../../assets/family/son.png',
    ];
  }
}
