import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {Customer} from '../Customer';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  angForm: FormGroup;
  customers: Customer[];
  buzeusz: boolean = false;
  constructor(private fb: FormBuilder, private as: AppService,
              private router: Router) { this.createForm();}

  createForm(){
    this.angForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
      ID_Number: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8}')]],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{11}')]],
      zip_code: ['', [Validators.required, Validators.pattern('^[0-9]{4}')]],
      city_: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*')]],
      street: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*')]],
      house_number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]

    });
  }

  addCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number) {
    var CustomerArray: any [] = [];
    CustomerArray.push(this.customers)
    this.buzeusz = false;
    console.log(CustomerArray)
    for(let i = 0; i<CustomerArray[0].length; i++) {
      for (const customer of CustomerArray) {
        var y = 0;
        console.log(customer)
        if (customer[i].ID_Number === ID_Number) {
          y = 0;
          break;
        } else {
          y--;
        }
      }
    }
    console.log(y)
    if(y!=0){
      this.as.addCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number);
      this.router.navigate(['successful-customer-add']);
    } else {
      this.buzeusz = true;

    }
  }
  ngOnInit(): void {
  this.as.getCustomer().subscribe((data: Customer[]) => {
    this.customers = data;
  });
  }

}
