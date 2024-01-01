import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participants-set',
  templateUrl: './participants-set.component.html',
  styleUrls: ['./participants-set.component.scss'],
})
export class ParticipantsSetComponent {
  @Input() images: string[];

  constructor() {
    this.images = [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/200',
    ];
  }
}
