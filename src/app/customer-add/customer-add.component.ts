import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AppService) { this.createForm();}

  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      ID_Number: ['', Validators.required],
      zip_code: ['', Validators.required],
      city_: ['', Validators.required],
      street: ['', Validators.required],
      house_number: ['', Validators.required]

    });
  }

  addCustomer(person_name, phone_number, ID_Number, zip_code, city_, street, house_number){
    this.as.addCustomer(person_name, phone_number, ID_Number, zip_code, city_, street, house_number);
  }

  ngOnInit(): void {
  }

}
