export class Book{
    bid:number;
     bname:string;
     bprice:number;
  constructor(id:number,name:string,price:number){
      this.bid=id;
      this.bname=name;
      this.bprice=price;
  }
}