import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details.service";
import { ActivatedRoute } from '@angular/router';
import {User} from '../event-full-details/user';

@Component({
  selector: 'app-stepper3',
  templateUrl: './stepper3.component.html',
  styleUrls: ['./stepper3.component.scss']
})
export class Stepper3Component implements OnInit {

  // userdetailslist:any ;

  eventlist:User[]=[] ;
  event_details: User[] = [];

  constructor(private service : DetailsService, private route: ActivatedRoute) { }

  // ngOnInit() {
	// 	this.service.read_user_detail().subscribe((data : any) => {
	// 	  this.displaydata(data)
	// 	  });
  //   }

    // displaydata(data){
    //   this.userdetailslist=data;
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
       
  peoplequantity:number=1;
  quantity:number=0;
  show: boolean = false;
  display_authority: boolean = false;

  i=1;
  j=0;

  plus(){
    if(this.j !=1000000){
      this.j ++;
      this.quantity=this.j;
      this.show=true;
    }
  }

  minus(){

     if(this.j!=0 ){
      this.j --;
      this.quantity=this.j;
     }
    }
  

  pluspeople(){
    if(this.i !=1000000){
      this.i ++;
      this.peoplequantity=this.i;
    }
  }

  minuspeople(){
    if(this.i !=1){
      this.i --;
      this.peoplequantity=this.i;
    }
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
  
  displayyes(){
    this.display_authority=true;
  }

  displayno(){
    this.display_authority=false;

  }
}
