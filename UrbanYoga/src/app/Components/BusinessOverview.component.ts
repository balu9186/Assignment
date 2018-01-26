import {Component} from "@angular/core";
import {AssessmentService} from "../Services/assessment.service";

@Component({
  templateUrl:'../Components/BusinessOverview.component.html'
})

export class BusinessOverviewComponent{
  defaultdata:any;
  fulldetails:any;
  constructor(private _assSer:AssessmentService) {
    this._assSer.getBusinessOverView().subscribe(res => this.defaultdata = res, err => console.log(err));

  }

  ViewDetails(){
    this._assSer.getBusinessOverViewDetails().subscribe(res => this.fulldetails = res, err => console.log(err));
  }
}
