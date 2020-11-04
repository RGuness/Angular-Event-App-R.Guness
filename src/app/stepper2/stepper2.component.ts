import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details.service";
import { ActivatedRoute } from '@angular/router';
import {User} from '../event-full-details/user';

@Component({
  selector: 'app-stepper2',
  templateUrl: './stepper2.component.html',
  styleUrls: ['./stepper2.component.scss']
})
export class Stepper2Component implements OnInit {

  // userdetailslist:any ;

  eventlist:User[]=[] ;
  event_details: User[] = [];

  credit_cards=['master card','visa', 'apple pay', 'cirrus','paypal','netbanking','discover','diners club'];

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
        // this.displaydata(data)
        });
    }

    displaydata(){
      this.route.paramMap.subscribe(params => {
        let eventTitle = params.get('title');
        this.event_details = this.eventlist.filter(p => p.event_title==eventTitle);
      });
      return this.event_details;
    }
    
  show: boolean = false;
  quantity:number=0;
  i=0;

  plus(){
    if(this.i !=1000000){
      this.i ++;
      this.quantity=this.i;
      this.show=true;
    }
  }

  minus(){
    if(this.i !=0){
      this.i --;
      this.quantity=this.i;
      this.show=false;
    }
  }
}
