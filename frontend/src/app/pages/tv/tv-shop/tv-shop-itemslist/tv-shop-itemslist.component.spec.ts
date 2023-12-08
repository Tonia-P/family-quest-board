import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShopItemslistComponent } from './tv-shop-itemslist.component';

describe('TvShopItemslistComponent', () => {
  let component: TvShopItemslistComponent;
  let fixture: ComponentFixture<TvShopItemslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShopItemslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShopItemslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
