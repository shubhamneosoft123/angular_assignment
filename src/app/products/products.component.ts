import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
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

  swal({
    title: 'Are you sure?',
    text: 'Are you sure that you want to delete Product?',
    icon: 'warning',
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      this.apiService.deleteProducts(id).subscribe((res:any)=>{
        console.log(res);
        this.getProducts();
      })
      swal('Deleted!', 'Products has been deleted!', 'success');
    }
  });
  
}

}
