import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBottomNavbarComponent } from './mobile-bottom-navbar.component';

describe('MobileBottomNavbarComponent', () => {
  let component: MobileBottomNavbarComponent;
  let fixture: ComponentFixture<MobileBottomNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBottomNavbarComponent]
    });
    fixture = TestBed.createComponent(MobileBottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
