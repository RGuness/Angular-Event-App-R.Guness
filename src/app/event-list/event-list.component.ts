import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventlist:any ;

  constructor(private service : DetailsService) { }

  ngOnInit() {
    this.service.read_json().subscribe((data : any) => {
      this.displaydata(data)
      });
  }
 
  displaydata(data){
   this.eventlist=data;
  }
}
