import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  empData: any=[];

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {

    this.empData=this.ar.snapshot.params['empId'];
    console.log(this.empData);
    
  }

}
