import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShopslistItemComponent } from './mobile-shopslist-item.component';

describe('MobileShopslistItemComponent', () => {
  let component: MobileShopslistItemComponent;
  let fixture: ComponentFixture<MobileShopslistItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileShopslistItemComponent]
    });
    fixture = TestBed.createComponent(MobileShopslistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
