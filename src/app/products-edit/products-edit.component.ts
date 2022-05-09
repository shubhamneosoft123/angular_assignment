import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  editData: any;

  constructor(private apiService:ApiService,private activatedRoute:ActivatedRoute,private router:Router) { }
  productEditForm:any;
  ngOnInit(): void {

    this.productEditForm=new FormGroup({
      pname:new FormControl(""),
      disc:new FormControl(""),
      price:new FormControl(""),
    })

    this.apiService.getProductsById(this.activatedRoute.snapshot.params['id']).subscribe((res)=>{
      this.editData=res;
      console.log( this.editData);
      this.productEditForm.controls['pname'].setValue(this.editData.pname);
      this.productEditForm.controls['disc'].setValue(this.editData.disc);
      this.productEditForm.controls['price'].setValue(this.editData.price);
      
    })

  }

  updateForm(){
    this.apiService.updateProducts(this.activatedRoute.snapshot.params['id'],this.productEditForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/products'])
    })
  }
}
