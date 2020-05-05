import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';
import {Customer} from '../Customer';
import {Connection} from '../Connection';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: any = {};
  angForm: FormGroup;
  CustomerForCheck: Customer[];
  buzeusz: boolean = false;
  customerID: Number;
  ConnectionForCheck: Connection[];
  ConnectionID: String;
  constructor(private route: ActivatedRoute, private router: Router,
              private as: AppService, private fb: FormBuilder) {

    this.createForm();
  }

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

  public ngOnInit() {
    this.route.params.subscribe(params => {
      this.as.editCustomer(params.id).subscribe(res => {
        this.customer = res;
        var CustomerArray: any [] = [];
        CustomerArray.push(this.customer)
        for(const Customer of CustomerArray){
          this.customerID = Customer.ID_Number;

        }
      });
      this.as.getCustomer().subscribe((data: Customer[]) => {
        this.CustomerForCheck = data;
      });
      this.as.getConnection().subscribe((data: Connection[]) => {
        this.ConnectionForCheck = data;
        var ConnectionArray: any[] = [];
        ConnectionArray.push(this.ConnectionForCheck)
        console.log("ez kell nekem")
        console.log(ConnectionArray)
        for(let i=0; i<ConnectionArray[0].length;i++) {
          for (const connection of ConnectionArray) {
            console.log(connection)
            if(connection[i].customer.ID_Number=== this.customerID){
              console.log(this.customerID)
              console.log(connection[i].customer.ID_Number)
              console.log(connection[i]._id)
              this.ConnectionID = connection[i]._id;
              console.log(connection)

            }
          }
        }
      });
    });

  }

  updateCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number){
    this.route.params.subscribe(params => {
      var CustomerArrayForCheck: any [] = [];
      CustomerArrayForCheck.push(this.CustomerForCheck)
      this.buzeusz = false;
      var i = 0;
      var z=3;
      var r=2;
      for(let i=0; i<CustomerArrayForCheck[0].length;i++) {
        for (const customer of CustomerArrayForCheck) {
          if (customer[i].ID_Number === ID_Number) {
            z = 0;
          } else {
          }
        }
      }
      if(ID_Number === this.customerID){
        r=0;
      }
      if((r==0 && z == 0) || (z==3)){
        this.as.updateCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number, params.id);
        console.log("updatecon előtt")
        console.log(this.ConnectionID)
       // this.as.deleteCustomerFromConnTemp(first_name, last_name,phone_number, ID_Number, this.ConnectionID, this.customerID);
        this.as.UpdateConnectionWithCustomer(first_name, last_name,phone_number, ID_Number, this.ConnectionID);
        console.log("updatecon után")
        console.log(this.ConnectionID)
        this.router.navigate(['successful-customer-update']);
      } else {
        this.buzeusz = true;
      }
    });
  }

}
