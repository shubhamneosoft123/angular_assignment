import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Ng Switch Assignment
  math="";
  physics="";
  chemestry="";
  percentage:any;

  calculatePer(){ 
    this.percentage=( (parseInt(this.math)+parseInt(this.physics)+parseInt(this.chemestry))/300)*100;
    console.log(this.percentage);
  }

}
