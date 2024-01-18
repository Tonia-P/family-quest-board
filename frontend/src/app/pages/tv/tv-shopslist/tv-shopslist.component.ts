import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './tv-shoplist.interface';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { ShopsService } from 'src/app/global/services/item-shop/shop.service';
import { Shop } from 'src/app/pages/shared/interfaces/shop';
import { Item } from 'src/app/pages/shared/interfaces/item';

@Component({
  selector: 'app-tv-shopslist',
  templateUrl: './tv-shopslist.component.html',
  styleUrls: ['./tv-shopslist.component.scss'],
})
export class TvShopslistComponent implements OnInit {
Number(arg0: string) {
throw new Error('Method not implemented.');
}
timer(arg0: number,arg1: number) {
throw new Error('Method not implemented.');
}

  @Input() shops: Shop[] = [];

  @Input() slides: Slide[] = [
    {
      // Camille Unknown, artstation
      src:
        "https://i.pinimg.com/originals/cb/e1/40/cbe140b6a6cd6958a5457508cc7280e0.gif"
    },
    {
      // minimoss on DeviantArt
      src:
        "https://i.pinimg.com/originals/a2/95/16/a2951652cffcba42fe8b6d010d9e5dd0.gif"
    },
    {
      // vertibirdo on DeviantArt
      src:
        "https://i.pinimg.com/originals/3a/05/fa/3a05faad64800e1cce421f4c013b1bc4.gif"
    },
    {
      // waneella, Patreon
      src:
        "https://i.pinimg.com/originals/28/a1/e3/28a1e36191eb43fae5347624b17edf10.gif"
    }
  ];


  currentSlide = 0;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService,
    private socketService: SocketsService, private shopsService: ShopsService) {}

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
    this.preloadImages(); // for the demo
    this.getAllShops(); // retrieves all the shops
    this.socketService.subscribe("Item_Broadcast", (data: any) => {
      console.log('ON HOME');
      console.log(data);
      const shopid = data?.shopId;
      document.location.href = 'http://localhost:59816/tv/shop/' + shopid;
    });
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  private getAllShops(): void {
    this.shopsService.getAll().subscribe((result) => {
      console.log(result);
      this.shops = result;
    });
  }

}
