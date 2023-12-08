import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvHeaderUserComponent } from './tv-header-user.component';

describe('TvHeaderUserComponent', () => {
  let component: TvHeaderUserComponent;
  let fixture: ComponentFixture<TvHeaderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvHeaderUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvHeaderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
