import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvQuestbookComponent } from './tv-questbook.component';

describe('TvQuestbookComponent', () => {
  let component: TvQuestbookComponent;
  let fixture: ComponentFixture<TvQuestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvQuestbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvQuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
