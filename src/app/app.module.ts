import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { StepperComponent } from './Main stepper/stepper.component';

import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { HomepageComponent } from './homepage/homepage.component';
import { Stepper1Component } from './stepper1/stepper1.component';
import { Stepper2Component } from './stepper2/stepper2.component';
import { Stepper3Component } from './stepper3/stepper3.component';
import { Stepper4Component } from './stepper4/stepper4.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { InfoSummaryComponent } from './info-summary/info-summary.component';
import { EventFullDetailsComponent } from './event-full-details/event-full-details.component';
import { CreateStepper1Component } from './create-stepper1/create-stepper1.component';
import { CreateStepper2Component } from './create-stepper2/create-stepper2.component';
import { CreateStepper3Component } from './create-stepper3/create-stepper3.component';
import { CreateStepper4Component } from './create-stepper4/create-stepper4.component';
import { CreateMainStepperComponent } from './create-main-stepper/create-main-stepper.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    StepperComponent,
    HomepageComponent,
    Stepper1Component,
    Stepper2Component,
    Stepper3Component,
    Stepper4Component,
    EventListComponent,
    InfoSummaryComponent,
    EventFullDetailsComponent,
    CreateStepper1Component,
    CreateStepper2Component,
    CreateStepper3Component,
    CreateStepper4Component,
    CreateMainStepperComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    [NgxMaterialTimepickerModule.setLocale('en-AE')],
    NgxDropzoneModule,
    FormsModule
     
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
