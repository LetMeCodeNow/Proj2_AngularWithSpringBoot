import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects

  salesPersonList:SalesPerson[]=[
    new SalesPerson("Anup","Kumar","anup.k@gmail.com",1100),
    new SalesPerson("Amar","singh","amar.singh@gmail.com",1200),
    new SalesPerson("Akhil","Rajoriya","akhil.raj@gmail.com",1300),
   new SalesPerson("Arun","Shrivastav","arun.s@gmail.com",1400)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
