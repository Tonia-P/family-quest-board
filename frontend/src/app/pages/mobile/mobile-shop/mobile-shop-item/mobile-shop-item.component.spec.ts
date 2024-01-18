import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShopItemComponent } from './mobile-shop-item.component';

describe('MobileShopItemComponent', () => {
  let component: MobileShopItemComponent;
  let fixture: ComponentFixture<MobileShopItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileShopItemComponent]
    });
    fixture = TestBed.createComponent(MobileShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
