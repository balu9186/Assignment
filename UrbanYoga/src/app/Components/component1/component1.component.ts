import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  @Input() field1:string;
  @Input() field2:string;
  @Input() field3:string;
  constructor() { 
    this.field1="hai";
  }

  ngOnInit() {
  }

  
  

}
