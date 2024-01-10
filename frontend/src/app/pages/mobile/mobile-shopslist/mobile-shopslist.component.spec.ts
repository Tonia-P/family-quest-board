import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShopslistComponent } from './mobile-shopslist.component';

describe('MobileShopslistComponent', () => {
  let component: MobileShopslistComponent;
  let fixture: ComponentFixture<MobileShopslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileShopslistComponent]
    });
    fixture = TestBed.createComponent(MobileShopslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
