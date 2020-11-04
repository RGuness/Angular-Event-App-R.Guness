import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFullDetailsComponent } from './event-full-details.component';

describe('EventFullDetailsComponent', () => {
  let component: EventFullDetailsComponent;
  let fixture: ComponentFixture<EventFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFullDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
