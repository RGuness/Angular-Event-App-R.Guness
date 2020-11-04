import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-create-stepper1',
  templateUrl: './create-stepper1.component.html',
  styleUrls: ['./create-stepper1.component.scss']
})
export class CreateStepper1Component implements OnInit {

  schedules=['Yearly','Monthly', 'Weekly', 'Daily'];
  schedules2=['Every 1st day of the month','Every 1st day of the week', 'Every 1st day of the year', 'Every 2nd day of the month','Every 2nd day of the month','Every 2nd day of the year'];
  category=['Music','Food & Drink', 'Art & Culture', 'Parties & Nightlife','Sports & Wellness','Networking & Classes'];

  constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

	onSubmit(userdata){
		console.warn("Form data",userdata);
	
	}
}
