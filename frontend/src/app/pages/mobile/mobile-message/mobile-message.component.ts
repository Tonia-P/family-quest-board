import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-message',
  templateUrl: './mobile-message.component.html',
  styleUrls: ['./mobile-message.component.scss']
})
export class MobileMessageComponent {

  @Input() label: string = '';
  @Input() color: 'red' | 'green' = 'green';
  @Input() clear: string = '';

  clearMessage(): void{
    this.clear = "clear";
  }
}
