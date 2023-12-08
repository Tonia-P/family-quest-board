import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvQuestbookItemComponent } from './tv-questbook-item.component';

describe('TvQuestbookItemComponent', () => {
  let component: TvQuestbookItemComponent;
  let fixture: ComponentFixture<TvQuestbookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvQuestbookItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvQuestbookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
