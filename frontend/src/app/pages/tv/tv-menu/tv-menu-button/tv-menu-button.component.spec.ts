import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMenuButtonComponent } from './tv-menu-button.component';

describe('TvMenuButtonComponent', () => {
  let component: TvMenuButtonComponent;
  let fixture: ComponentFixture<TvMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
