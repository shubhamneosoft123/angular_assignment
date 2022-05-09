import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookArray=[
    new Book(1,"java",200),
    new Book(2,"php",300),
    new Book(3,".Net",400),
    new Book(4,"C++",400),
  ]

}
