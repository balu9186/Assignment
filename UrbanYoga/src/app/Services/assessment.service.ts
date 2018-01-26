import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AssessmentService{
  data:any;

  constructor(private _http:Http){

  }

  getBusinessOverView(){
    return this._http.get("https://api.myjson.com/bins/5bdb3")
      .map((res:Response)=>this.data=res.json());
  }

  getBusinessOverViewDetails(){
    return this._http.get("https://api.myjson.com/bins/47axv")
      .map((res:Response)=>this.data=res.json());
  }
}
