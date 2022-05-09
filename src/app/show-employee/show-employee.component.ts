import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }
  EmpArray=[
    new Employee(101,"shubham","pune",9673770139,"Shubham@gmail.com",20000),
    new Employee(102,"Abhijeet","Nagpur",999999999,"Abhijeet@gmail.com",20000),
    new Employee(103,"Akshay","Mumbai",888888888,"Akshay@gmail.com",20000),
    new Employee(104,"Atul","Thane",7777777777,"Atul@gmail.com",20000),
    new Employee(105,"Amol","Latur",96737454554,"Amol@gmail.com",20000),
    new Employee(106,"Pravin","Satara",896437445,"Pravin@gmail.com",20000),
    new Employee(107,"Pramod","Sangali",734674237,"Pramod@gmail.com",20000),
    new Employee(108,"Suraj","Solapur",9764546454,"Suraj@gmail.com",20000),
    new Employee(109,"shrikant","Kolhapur",8645674354,"shrikant@gmail.com",20000),
    new Employee(110,"sachin","Nashik",776437454364,"sachin@gmail.com",20000),
  
   ];

  
}

class Employee{
  empId:number;
  empName:string;
  empAddress:string;
  empPhone:number;
  empEmail:string;
  empSalary:number;
 
  constructor(empId:number,empName:string,empAddress:string,empPhone:number,empEmail:string,empSalary:number){
    this.empId=empId;
    this.empName=empName;
    this.empAddress=empAddress;
    this.empPhone=empPhone;
    this.empEmail=empEmail;
    this.empSalary=empSalary;
 
  }
}
