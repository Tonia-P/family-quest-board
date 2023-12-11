import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsSetComponent } from './participants-set.component';

describe('ParticipantsSetComponent', () => {
  let component: ParticipantsSetComponent;
  let fixture: ComponentFixture<ParticipantsSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantsSetComponent]
    });
    fixture = TestBed.createComponent(ParticipantsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
