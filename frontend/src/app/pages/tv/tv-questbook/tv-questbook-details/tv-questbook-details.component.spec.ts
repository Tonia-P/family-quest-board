import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvQuestbookDetailsComponent } from './tv-questbook-details.component';

describe('TvQuestbookDetailsComponent', () => {
  let component: TvQuestbookDetailsComponent;
  let fixture: ComponentFixture<TvQuestbookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvQuestbookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvQuestbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
