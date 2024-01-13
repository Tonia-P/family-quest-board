import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-participants-set',
  templateUrl: './participants-set.component.html',
  styleUrls: ['./participants-set.component.scss', ],
})
export class ParticipantsSetComponent {
  @Input() images: string[] = [];
  
//   @Output() imagesE= new EventEmitter<string[]>();


//   onArrayChanged() {
//     this.imagesE.emit(this.images);
//     console.log(this.images)
//  }

}
