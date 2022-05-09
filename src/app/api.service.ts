import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000/products/';

  //get
  getAllProducts() {
    return this._http.get(this.apiUrl);
  }

  //post
  addProducts(data: any) {
    return this._http.post(this.apiUrl, data);
  }
  //get for id

  getProductsById(id:any){
    return this._http.get(this.apiUrl +id);
  }

  //delete products

  deleteProducts(id: any) {
    return this._http.delete(this.apiUrl + id);
  }

  //update Product

  updateProducts(id:any,data:any){
    return this._http.put(this.apiUrl + id,data);
  }
}
