import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvQuestbookListComponent } from './tv-questbook-list.component';

describe('TvQuestbookListComponent', () => {
  let component: TvQuestbookListComponent;
  let fixture: ComponentFixture<TvQuestbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvQuestbookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvQuestbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
