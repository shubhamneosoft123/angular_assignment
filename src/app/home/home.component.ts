import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  products=[
    {
      id:1,
      title:"iphone",
      discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos.",
      price:20000,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSoJEQmvNjsKv7dCOZV_KRMseK_wTrRtLQA&usqp=CAU"
    },
    {
      id:2,
      title:"samsung",
      discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos.",
      price:30000,
      image:"https://5.imimg.com/data5/CA/DA/MY-19099349/samsung-mobile-500x500.png"
    },
    {
      id:3,
      title:"Redmi",
      discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos.",
      price:40000,
      image:"https://5.imimg.com/data5/OV/LB/MY-46055990/redmi-mobile-phone-500x500.jpg"
    },
    {
      id:4,
      title:"onePlus",
      discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos.",
      price:50000,
      image:"https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg"
    },
    {
      id:5,
      title:"sony",
      discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos.",
      price:55000,
      image:"https://www.ispyprice.com/static/nwprd_model/sony-xperia-xa2-8162.jpg"
    },
    {
      id:6,
      title:"Blackberry",
      discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos.",
      price:87000,
      image:"https://drop.ndtv.com/TECH/product_database/images/5312013103000AM_635_Blackberry_Bold_9900.png"
    },
  ]

}
