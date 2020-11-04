import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepper2Component } from './create-stepper2.component';

describe('CreateStepper2Component', () => {
  let component: CreateStepper2Component;
  let fixture: ComponentFixture<CreateStepper2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepper2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStepper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
