import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{BodyComponent} from './body/body.component';
import {HomepageComponent} from './homepage/homepage.component'
import{EventListComponent} from './event-list/event-list.component';
import{StepperComponent} from './Main stepper/stepper.component';
import {EventFullDetailsComponent}from './event-full-details/event-full-details.component';
import {CreateMainStepperComponent} from './create-main-stepper/create-main-stepper.component';


const routes: Routes = [
  {path:'homepage' , component:HomepageComponent,
  children:[
    {path:'create_event', component:EventListComponent},
    {path:'main_stepper', component:CreateMainStepperComponent},
    {path:'create_event/event_details/:title', component:EventListComponent}
  ]},



  {path: '**', redirectTo: 'homepage'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
