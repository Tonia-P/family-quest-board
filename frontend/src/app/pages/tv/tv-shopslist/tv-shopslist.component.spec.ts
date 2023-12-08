import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShopslistComponent } from './tv-shopslist.component';

describe('TvShopslistComponent', () => {
  let component: TvShopslistComponent;
  let fixture: ComponentFixture<TvShopslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShopslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShopslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
