import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestItemComponent } from './quest-item.component';

describe('QuestItemComponent', () => {
  let component: QuestItemComponent;
  let fixture: ComponentFixture<QuestItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestItemComponent]
    });
    fixture = TestBed.createComponent(QuestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
