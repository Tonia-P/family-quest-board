import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvHeaderCurrencyComponent } from './tv-header-currency.component';

describe('TvHeaderCurrencyComponent', () => {
  let component: TvHeaderCurrencyComponent;
  let fixture: ComponentFixture<TvHeaderCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvHeaderCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvHeaderCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
