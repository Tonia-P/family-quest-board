import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileQuestbookComponent } from './mobile-questbook.component';

describe('MobileQuestbookComponent', () => {
  let component: MobileQuestbookComponent;
  let fixture: ComponentFixture<MobileQuestbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileQuestbookComponent]
    });
    fixture = TestBed.createComponent(MobileQuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
