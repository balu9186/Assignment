import {Routes} from "@angular/router";

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

export const appRoute = [
  /*{path:"",component:DashboardComponent},*/
  {path:"Appointments",component:AppointmentsComponent},
  {path:"Classes",component:ClassesComponent},
  {path:"ClientHome",component:ClientHomeComponent},
  {path:"Dashboard",component:DashboardComponent,
    children:[
      /*{path:"",component:BusinessOverviewComponent},*/
      {path:"ChildDashboard",component:ChildDashboardComponent},
      {path:"BusinessOverview",component:BusinessOverviewComponent},
      {path:"Schedule",component:ScheduleComponent},
      {path:"Reports",component:ReportsComponent}
    ]},
  {path:"Retail",component:RetailComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"Workshops",component:WorkshopsComponent}
];
