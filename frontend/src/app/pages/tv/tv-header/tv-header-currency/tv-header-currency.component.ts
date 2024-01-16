import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-header-currency',
  templateUrl: './tv-header-currency.component.html',
  styleUrls: ['./tv-header-currency.component.scss']
})
export class TvHeaderCurrencyComponent implements OnInit {

  constructor() { }

  @Input() amount: number = 0;

  ngOnInit(): void {
  }

}
