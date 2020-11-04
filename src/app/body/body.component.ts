import { Component, OnInit } from '@angular/core';
import {DetailsService} from "../details.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  // eventlist:any ;

  constructor(private service : DetailsService) { }

  ngOnInit() {
    // this.service.read_json().subscribe((data : any) => {
    //   this.displaydata(data)
    //   });
  }
 
  // displaydata(data){
  //  this.eventlist=data;
  // }
}
