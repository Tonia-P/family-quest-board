import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileQuestAddComponent } from './mobile-quest-add.component';

describe('MobileQuestAddComponent', () => {
  let component: MobileQuestAddComponent;
  let fixture: ComponentFixture<MobileQuestAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileQuestAddComponent]
    });
    fixture = TestBed.createComponent(MobileQuestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
