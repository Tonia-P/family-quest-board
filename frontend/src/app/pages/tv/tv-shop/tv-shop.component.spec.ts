import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShopComponent } from './tv-shop.component';

describe('TvShopComponent', () => {
  let component: TvShopComponent;
  let fixture: ComponentFixture<TvShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
