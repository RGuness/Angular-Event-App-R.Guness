import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepper4Component } from './create-stepper4.component';

describe('CreateStepper4Component', () => {
  let component: CreateStepper4Component;
  let fixture: ComponentFixture<CreateStepper4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepper4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStepper4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
