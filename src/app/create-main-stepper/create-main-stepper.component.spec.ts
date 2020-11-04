import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMainStepperComponent } from './create-main-stepper.component';

describe('CreateMainStepperComponent', () => {
  let component: CreateMainStepperComponent;
  let fixture: ComponentFixture<CreateMainStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMainStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMainStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
