import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details.service";
import { ActivatedRoute } from '@angular/router';
import {User} from './user';

@Component({
  selector: 'app-event-full-details',
  templateUrl: './event-full-details.component.html',
  styleUrls: ['./event-full-details.component.scss']
})
export class EventFullDetailsComponent implements OnInit {

  eventlist:User[]=[] ;
  event_details: User[] = [];

  constructor(private service : DetailsService, private route: ActivatedRoute) { }

   ngOnInit(): void {
    this.service.read_json().subscribe((data : any) => {
      this.eventlist=data;
      // this.displaydata(data)
      });
  }
  // displaydata(data){
  //   this.eventlist=data;
  //  }

 
  displaydata(){
    this.route.paramMap.subscribe(params => {
      let eventTitle = params.get('title');
      this.event_details = this.eventlist.filter(p => p.event_title==eventTitle);
    });
    return this.event_details;
  }
}
