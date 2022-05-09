import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  studentDetails: any = [];
  studentForm: FormGroup | any;
  name: any;
  isSubmit:boolean=true;
  isUpdate:boolean=false
  studArray = [
    new Student('shubham', 'pune', 'shubham@gmail.com', 21),
    new Student('Abhijeet', 'Nashik', 'Abhijeet@gmail.com', 22),
    new Student('Akshay', 'mumbai', 'Akshay@gmail.com', 23),
    new Student('Amey', 'satara', 'Amey@gmail.com', 24),
  ];
  list: any = [];
  upadateIndex: any;

  constructor() {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      rollno: new FormControl('', Validators.required),
    });
  }

  //Submit form
  submitForm() {
    this.studArray.push(this.studentForm.value);
    swal('Addedd!', 'Student data has been Added Successfully!', 'success');
    console.log(this.studentDetails);
    this.studentForm.reset();
  }

  // delete record
  deleteStudent(i: any) {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete student record?',
      icon: 'warning',
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.studArray.splice(i, 1);
        swal('Deleted!', 'Student data has been deleted!', 'success');
      }
    });
  }

  // edit student record
  getStudDta(i: any) {
    this.isSubmit=false;
    this.isUpdate=true;
    this.upadateIndex=i;
    this.studentForm.controls['name'].setValue(this.studArray[i].name);
    this.studentForm.controls['address'].setValue(this.studArray[i].address);
    this.studentForm.controls['email'].setValue(this.studArray[i].email);
    this.studentForm.controls['rollno'].setValue(this.studArray[i].rollno);
    console.log(this.studArray[i]);
  }
  //
  updateForm() {
    this.isSubmit=true;
    this.isUpdate=false;
    this.studArray.splice(this.upadateIndex,1);
    this.studArray.splice(this.upadateIndex,0,this.studentForm.value);
    swal('Updated!', 'Student record has been Updated  Successfully!', 'success');
    this.studentForm.reset();
  }
}

class Student {
  name: string;
  address: string;
  email: string;
  rollno: number;

  constructor(name: string, address: string, email: string, rollno: number) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.rollno = rollno;
  }
}

//search
// seachByName(e:any){
//   //  let a= res.name.match(e.target.value);

//   if(e.target.value === '' ) {
//     this.studentDetails=this.studArray;
// }
//    else{
//     this.studentDetails= this.studArray.filter(res=>{
//       return res.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
//     })
//    }
//   console.log(e.target.value);
// }
