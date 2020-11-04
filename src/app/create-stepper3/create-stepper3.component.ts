import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-stepper3',
  templateUrl: './create-stepper3.component.html',
  styleUrls: ['./create-stepper3.component.scss']
})
export class CreateStepper3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
