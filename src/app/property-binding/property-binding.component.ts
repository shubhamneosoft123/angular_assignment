import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }
  // Assignment -1 Property bindings
  chageType='password';
  mydata: any={};
  res: any=[];
  customObj:any=[];
  data: any;
  dummyDAta: any;
  mouseIn(){
    this.chageType='text';
  }
  mouseOut(){
    this.chageType='password';
  }

}
