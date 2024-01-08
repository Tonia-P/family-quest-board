import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileQuestDetailsComponent } from './mobile-quest-details.component';

describe('MobileQuestDetailsComponent', () => {
  let component: MobileQuestDetailsComponent;
  let fixture: ComponentFixture<MobileQuestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileQuestDetailsComponent]
    });
    fixture = TestBed.createComponent(MobileQuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
