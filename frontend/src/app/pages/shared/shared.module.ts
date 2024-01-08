import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameButtonComponent } from './game-button/game-button.component';
import { PopupComponent } from './popup/popup.component';
import { ParticipantsSetComponent } from './participants-set/participants-set.component';
import { CurrencyAmountComponent } from './currency-amount/currency-amount.component';
import { QuestItemComponent } from './quest-item/quest-item.component';
import { RewardCardComponent } from './reward-card/reward-card.component';



@NgModule({
  declarations: [
    GameButtonComponent,
    PopupComponent,
    ParticipantsSetComponent,
    CurrencyAmountComponent,
    QuestItemComponent,
    RewardCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameButtonComponent,
    ParticipantsSetComponent,
    CurrencyAmountComponent,
    QuestItemComponent,
    PopupComponent,
    PopupComponent,
    RewardCardComponent
  ]
})
export class SharedModule { }
