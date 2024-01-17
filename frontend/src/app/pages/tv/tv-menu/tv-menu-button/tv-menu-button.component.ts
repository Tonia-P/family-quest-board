import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-menu-button',
  templateUrl: './tv-menu-button.component.html',
  styleUrls: ['./tv-menu-button.component.scss']
})
export class TvMenuButtonComponent implements OnInit {

  @Input() label: string = "";
  @Input() url: string = '';
  @Input() imagePath: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
