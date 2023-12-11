import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameButtonComponent } from './game-button/game-button.component';
import { PopupComponent } from './popup/popup.component';
import { ParticipantsSetComponent } from './participants-set/participants-set.component';



@NgModule({
  declarations: [
    GameButtonComponent,
    PopupComponent,
    ParticipantsSetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameButtonComponent,
    ParticipantsSetComponent,
    PopupComponent
  ]
})
export class SharedModule { }
