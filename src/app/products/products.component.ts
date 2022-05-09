import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProductsData: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

// Fetch All products 
  getProducts(){
    this.apiService.getAllProducts().subscribe((res:any)=>{
      console.log(res);
      this.allProductsData=res;
    })
  }

// delete product

deleteProduct(id:any){

 
      this.apiService.deleteProducts(id).subscribe((res:any)=>{
        console.log(res);
        this.getProducts();
      })
     
  
}

}
