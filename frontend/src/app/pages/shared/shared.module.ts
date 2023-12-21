import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameButtonComponent } from './game-button/game-button.component';
import { PopupComponent } from './popup/popup.component';
import { RewardCardComponent } from './reward-card/reward-card.component';



@NgModule({
  declarations: [
    GameButtonComponent,
    PopupComponent,
    RewardCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameButtonComponent,
    PopupComponent,
    RewardCardComponent
  ]
})
export class SharedModule { }
