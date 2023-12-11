import { Component, Input, OnInit } from '@angular/core';

@Component({
   selector: 'app-game-button',
   templateUrl: './game-button.component.html',
   styleUrls: ['./game-button.component.scss']
  })
  export class GameButtonComponent implements OnInit {
   @Input() label: string = "";
   @Input() color: string = "green";
   @Input() onButtonClick: () => void;
  
   constructor() { 
      
      this.onButtonClick = () => {};
   }
  
   ngOnInit(): void {
   }
  
   buttonClick(): void {
      this.onButtonClick();
   }
  }