import {Component, Input} from "@angular/core";
import * as $ from 'jquery';

@Component({
  templateUrl:'../Components/Classes.component.html'
})

export class ClassesComponent{
  txt1:string;
  txt2:string;
  txt3:string;

  showTxt1(val){
    this.txt1=val;
  }

  showTxt2(val){
    this.txt2=val;
  }

  showTxt3(val){
    this.txt3=val;
  }

  highl(com){
    
  //   $("#com01").click(function(){
  //     $(".target").effect( "highlight", {color:"#669966"}, 3000 );
  //  });

  var addclass = 'color';
  var $cols = $('.target').click(function(e) {
      $cols.removeClass(addclass);
      $(this).addClass(addclass);
  });
  }

}
