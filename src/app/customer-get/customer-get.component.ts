import { Component, OnInit } from '@angular/core';
import {Customer} from '../Customer';
import {AppService} from '../app.service';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {
  customers: Customer[];
  searchText: string;

  constructor(private as: AppService) { }

  ngOnInit(): void {
    this.as.getCustomer().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
  deleteCustomer(id) {
    this.as.deleteCustomer(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}