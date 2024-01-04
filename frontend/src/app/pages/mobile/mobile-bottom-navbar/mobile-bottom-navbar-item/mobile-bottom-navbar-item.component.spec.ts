import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBottomNavbarItemComponent } from './mobile-bottom-navbar-item.component';

describe('MobileBottomNavbarItemComponent', () => {
  let component: MobileBottomNavbarItemComponent;
  let fixture: ComponentFixture<MobileBottomNavbarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBottomNavbarItemComponent]
    });
    fixture = TestBed.createComponent(MobileBottomNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
