import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepper4Component } from './stepper4.component';

describe('Stepper4Component', () => {
  let component: Stepper4Component;
  let fixture: ComponentFixture<Stepper4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stepper4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stepper4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
