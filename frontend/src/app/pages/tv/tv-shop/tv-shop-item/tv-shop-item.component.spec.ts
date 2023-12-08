import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShopItemComponent } from './tv-shop-item.component';

describe('TvShopItemComponent', () => {
  let component: TvShopItemComponent;
  let fixture: ComponentFixture<TvShopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShopItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
