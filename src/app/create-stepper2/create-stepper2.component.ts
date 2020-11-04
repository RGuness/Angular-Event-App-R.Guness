import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-stepper2',
  templateUrl: './create-stepper2.component.html',
  styleUrls: ['./create-stepper2.component.scss']
})
export class CreateStepper2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
