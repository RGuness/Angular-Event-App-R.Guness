import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {DetailsService} from "../details.service";

@Component({
  selector: 'app-stepper4',
  templateUrl: './stepper4.component.html',
  styleUrls: ['./stepper4.component.scss']
})
export class Stepper4Component implements OnInit {

  

  userdetailslist:any ;

  //registrationform:FormGroup;

  
  // registrationform=new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl('')


  // })
  constructor(private service : DetailsService) { }

  ngOnInit() {
    this.service.read_user_detail().subscribe((data : any) => {
      this.displaydata(data)
      });
  }
 



  displaydata(data){
    this.userdetailslist=data;
   }

   onSubmit(userdata){
     console.warn("Form data",userdata);
   }

   userData={
    username:"Guness.R",
    address:"this.userdetailslist"
  }
  // onSubmit(){
  //   console.log(this.registrationform.value);
  // }
}
