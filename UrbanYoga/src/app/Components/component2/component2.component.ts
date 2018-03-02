import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() text1 = new EventEmitter<string>();
  passTxt1(value:string){
    this.text1.emit(value);
  }

  @Output() text2 = new EventEmitter<string>();
  passTxt2(value:string){
    this.text2.emit(value);
  }

}
