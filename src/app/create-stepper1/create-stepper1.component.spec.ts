import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepper1Component } from './create-stepper1.component';

describe('CreateStepper1Component', () => {
  let component: CreateStepper1Component;
  let fixture: ComponentFixture<CreateStepper1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepper1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStepper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
