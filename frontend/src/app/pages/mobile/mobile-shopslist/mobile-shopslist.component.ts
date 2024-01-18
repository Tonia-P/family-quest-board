import { Component, Input, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';

@Component({
  selector: 'app-mobile-shopslist',
  templateUrl: './mobile-shopslist.component.html',
  styleUrls: ['./mobile-shopslist.component.scss']
})
export class MobileShopslistComponent {

  @Input() shops: Shop[] = [{
    _id: "2",
    items: [],
    owner: "Daddy",
    name: "Kebab House"
  }];



  currentSlide = 0;

  constructor(private shopsService: ShopsService) {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.shops.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.shops.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    this.getAllShops(); // retrieves all the shops
  }

  private getAllShops(): void {
    this.shopsService.getAll().subscribe((result) => {
      console.log(result);
      this.shops = result;
    });
  }
}
