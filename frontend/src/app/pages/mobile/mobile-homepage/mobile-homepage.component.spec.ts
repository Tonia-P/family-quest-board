import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomepageComponent } from './mobile-homepage.component';

describe('MobileHomepageComponent', () => {
  let component: MobileHomepageComponent;
  let fixture: ComponentFixture<MobileHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileHomepageComponent]
    });
    fixture = TestBed.createComponent(MobileHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
