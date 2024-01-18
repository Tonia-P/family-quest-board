import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMessageComponent } from './mobile-message.component';

describe('MobileMessageComponent', () => {
  let component: MobileMessageComponent;
  let fixture: ComponentFixture<MobileMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMessageComponent]
    });
    fixture = TestBed.createComponent(MobileMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
