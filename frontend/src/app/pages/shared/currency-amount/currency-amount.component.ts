import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-amount',
  templateUrl: './currency-amount.component.html',
  styleUrls: ['./currency-amount.component.scss']
})
export class CurrencyAmountComponent {

  @Input() amount: number = 0;
}
