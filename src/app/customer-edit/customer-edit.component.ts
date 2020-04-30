import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
              private as: AppService, private fb: FormBuilder) {
    this.createForm();
  }

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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.as.editCustomer(params.id).subscribe(res => {
        this.customer = res;
      });
    });
  }

  updateCustomer(person_name, phone_number, ID_Number, zip_code, city_, street, house_number){
    this.route.params.subscribe(params => {
      this.as.updateCustomer(person_name, phone_number, ID_Number, zip_code, city_, street, house_number);
      this.router.navigate(['customer-get']);
    });
  }

}
