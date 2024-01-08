import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCardComponent } from './reward-card.component';

describe('RewardCardComponent', () => {
  let component: RewardCardComponent;
  let fixture: ComponentFixture<RewardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardCardComponent]
    });
    fixture = TestBed.createComponent(RewardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
