import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  constructor(private apiService:ApiService,private router:Router) { }
  productForm:any;
  ngOnInit(): void {

    this.productForm=new FormGroup({
      pname:new FormControl(""),
      disc:new FormControl(""),
      price:new FormControl(""),
    })
  }
//Add products
  submitForm(){
    console.log(this.productForm.value);

    this.apiService.addProducts(this.productForm.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['products'])
    })
  }

}


