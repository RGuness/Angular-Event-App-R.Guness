import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepper3Component } from './create-stepper3.component';

describe('CreateStepper3Component', () => {
  let component: CreateStepper3Component;
  let fixture: ComponentFixture<CreateStepper3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepper3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStepper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
