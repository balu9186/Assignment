import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartsModule} from "@progress/kendo-angular-charts";
import 'hammerjs';

import {AppointmentsComponent} from "./Components/Appointments.component";
import {ClassesComponent} from "./Components/Classes.component";
import {ClientHomeComponent} from "./Components/ClientHome.component";
import {DashboardComponent} from "./Components/Dashboard.component";
import {RetailComponent} from "./Components/Retail.component";
import {SignInComponent} from "./Components/SignIn.component";
import {WorkshopsComponent} from "./Components/Workshops.component";
import {ChildDashboardComponent} from "./Components/ChildDashboard.component";
import {BusinessOverviewComponent} from "./Components/BusinessOverview.component";
import {ScheduleComponent} from "./Components/Schedule.component";
import {ReportsComponent} from "./Components/Reports.component";

import {AssessmentService} from "./Services/assessment.service";

import { AppComponent } from './app.component';
import {appRoute} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,AppointmentsComponent,ClassesComponent,ClientHomeComponent,DashboardComponent,
    RetailComponent,SignInComponent,WorkshopsComponent,ChildDashboardComponent,BusinessOverviewComponent,
    ScheduleComponent,ReportsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    ChartsModule,HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [AssessmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
