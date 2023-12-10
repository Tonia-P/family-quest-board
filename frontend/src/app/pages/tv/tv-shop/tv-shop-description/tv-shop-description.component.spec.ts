import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShopDescriptionComponent } from './tv-shop-description.component';

describe('TvShopDescriptionComponent', () => {
  let component: TvShopDescriptionComponent;
  let fixture: ComponentFixture<TvShopDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvShopDescriptionComponent]
    });
    fixture = TestBed.createComponent(TvShopDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
