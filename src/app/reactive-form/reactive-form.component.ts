import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  loginForm:any;
  regForm:any;
  // regForm: FormGroup = new FormGroup({});
  loginData: any=[];
  nameRegExp= "^[A-Za-z]*$"; 
  strongpasswordPattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$";
// usernameRegExp="^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){3,15}[a-zA-Z0-9]$"
constructor(){
  this.regForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern(this.nameRegExp)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
    age:new FormControl('',[Validators.required,Validators.min(16),Validators.max(55)]),
    username:new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]{3,15}$")]),
    setpass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.strongpasswordPattern)]),
    confirmpass:new FormControl('',Validators.required),
  },
  {validators:this.passwordMatch}
  );
}
  // regForm:any
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })

    
     
    
  }
// LoginForm
  sumitForm(){
    console.log(this.loginForm.value);
    this.loginData=this.loginForm.value;
  }
//RegiForm
  sumitRegForm(){
    console.log(this.regForm.value);
  }

  get name(){
    return this.regForm.get('name')
  }
  get email(){
    return this.regForm.get('email')
  }
  get mobile(){
    return this.regForm.get('mobile')
  }

  get age(){
    return this.regForm.get('age')
  }
  get username(){
    return this.regForm.get('username')
  }

  get pass(){
    return this.regForm.get('setpass')
  }
  get conpass(){
    return this.regForm.get('confirmpass')
  }


  private passwordMatch(rForm:AbstractControl):any{
    let pass=rForm.get('setpass')?.value;
    let cpass=rForm.get('confirmpass')?.value;
    if(pass==cpass)
      return null; // validation passed
    else
      return { 'mismatch':true}; 
  }


}

