import {Component} from "@angular/core";
import {AssessmentService} from "../Services/assessment.service";
import {forEach} from "@angular/router/src/utils/collection";
import {until} from "selenium-webdriver";
import elementIsSelected = until.elementIsSelected;

@Component({
  templateUrl:'../Components/BusinessOverview.component.html'
})

export class BusinessOverviewComponent{
  defaultdata:any;
  fulldetails:any;
  details:any[];
  hideRows:boolean=true;
  constructor(private _assSer:AssessmentService) {
    this._assSer.getBusinessOverView().subscribe(res => this.defaultdata = res, err => console.log(err));
    this._assSer.getBusinessOverViewDetails().subscribe(res => this.fulldetails = res, err => console.log(err));

  }

  ViewDetails(arg1){

    this.details=[
      {"PricingOptionID":"","ProgramID":"","Name":"","Sales":""}
    ];

    for(let i=0;i<this.fulldetails.length;i++)
    {

      if(this.fulldetails[i].ProgramID == arg1){

        this.details.push(this.fulldetails[i]);

      }
    }

    this.hideRows = false;
    }

  HideDetails()
  {
    this.hideRows = true;
  }

}
