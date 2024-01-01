import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAddQuestComponent } from './mobile-add-quest.component';

describe('MobileAddQuestComponent', () => {
  let component: MobileAddQuestComponent;
  let fixture: ComponentFixture<MobileAddQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAddQuestComponent]
    });
    fixture = TestBed.createComponent(MobileAddQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
