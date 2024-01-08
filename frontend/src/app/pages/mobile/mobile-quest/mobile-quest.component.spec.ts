import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileQuestComponent } from './mobile-quest.component';

describe('MobileQuestComponent', () => {
  let component: MobileQuestComponent;
  let fixture: ComponentFixture<MobileQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileQuestComponent]
    });
    fixture = TestBed.createComponent(MobileQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
