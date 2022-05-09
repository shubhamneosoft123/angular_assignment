import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  colName=false;
  ngOnInit(): void {
  }

  arraySort(property:any){
    this.colName!=property;
  }
  myName="shubham";
  index=0;
  // 7 .Assignment Order By Pipe
  colNames:any;
  isDecentOrder:boolean=true;
  MytrainArray=[
    new Train(711,'Local','Trans-Harbour',new Date('12 Dec, 1995'),100), 
    new Train(121,'Shuttle','Western',new Date('10 dec, 1990'),50),
    new Train(411,'Pasenger','Harbour',new Date('19 march, 1992'),80),
    new Train(310,'Express','Cenral',new Date('12 Jan, 1998'),120),
  ]

  sortData(data:any){
    this.colNames=data;
    this.isDecentOrder=!this.isDecentOrder;
    console.log(this.isDecentOrder);
  }

}

class Train{
  tId: number;
  tType:string;
  tRoute: string;
  constructDate: Date;
  tTicket: number;

  constructor(tId:number,tType:string,tRoute:string,constructDate:Date,tTicket:number)
  {
    this.tId=tId;
    this.tRoute=tRoute;
    this.tTicket=tTicket;
    this.tType=tType;
    this.constructDate=constructDate;
  }


}