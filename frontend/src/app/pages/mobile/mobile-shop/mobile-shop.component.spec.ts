import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShopComponent } from './mobile-shop.component';

describe('MobileShopComponent', () => {
  let component: MobileShopComponent;
  let fixture: ComponentFixture<MobileShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileShopComponent]
    });
    fixture = TestBed.createComponent(MobileShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
