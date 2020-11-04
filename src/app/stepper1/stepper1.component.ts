import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {DetailsService} from "../details.service";
import {User} from '../event-full-details/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stepper1',
  templateUrl: './stepper1.component.html',
  styleUrls: ['./stepper1.component.scss']
})
export class Stepper1Component implements OnInit {


	schedules=['Yearly','Monthly', 'Weekly', 'Daily'];
	schedules2=['Every 1st day of the month','Every 1st day of the week', 'Every 1st day of the year', 'Every 2nd day of the month','Every 2nd day of the month','Every 2nd day of the year'];
	category=['Music','Food & Drink', 'Art & Culture', 'Parties & Nightlife','Sports & Wellness','Networking & Classes'];
	// userModel=new User('public','Daily','Every 2nd day of the year','1:13 PM','9:13 PM','publicq');
	// userModel=new User('w','','','','','');
	// userModel=new User('','','','','','');

	// userModel=new User();

	eventlist:User[]=[] ;
	event_details: User[] = [];
	

	userdetailslist:any ;

	  constructor(private service : DetailsService,private route: ActivatedRoute) { }
	  
	 
	//   ngOnInit() {
	// 	this.service.read_user_detail().subscribe((data : any) => {
	// 	  this.displaydata(data)
	// 	  });
	//   }

	//   displaydata(data){
	// 	this.userdetailslist=data;
	//    }

	ngOnInit(): void {
		this.service.read_json().subscribe((data : any) => {
		  this.eventlist=data;
		  });
	  }

	  displaydata(){
		this.route.paramMap.subscribe(params => {
		  let eventTitle = params.get('title');
		  this.event_details = this.eventlist.filter(p => p.event_title==eventTitle);
		});
		return this.event_details;
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
	// userData={
	// 	username:"Guness.R",
	// 	address:"Grand bois"
	//   }

}
