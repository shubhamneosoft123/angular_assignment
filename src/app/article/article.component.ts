import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  res: any=0;

  constructor() { }

  ngOnInit(): void {
  }
   cricketer="sachin tendulkar";
   num1:any="";
   num2:any=""

   change(){
     this.cricketer="SACHIN TENDULKAR BIOGRAPHY"
   }
   add(val1:string,val2:string){
     this.res=parseInt(val1)+parseInt(val2);
    //  parseInt(val);

   }
}
