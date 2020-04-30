import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  uri = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}
  addCustomer(person_name, phone_number, ID_Number, zip_code, city_, street, house_number){
    const obj = {
      person_name: person_name,
      phone_number: phone_number,
      ID_Number: ID_Number,
      zip_code: zip_code,
      city_: city_,
      street: street,
      house_number: house_number,
      status: "aktív"
    };
    console.log(obj);
    this.http.post(`${this.uri}/addCustomer`, obj).subscribe(res => console.log('Done'));
  }
  addDVD(title, date_of_get,){
    const obj = {
      title: title,
      date_of_get: date_of_get,
      State: "szabad",
    };
    console.log(obj);
    this.http.post(`${this.uri}/addDVD`, obj).subscribe(res => console.log('Done'));
  }

  addConnection(ID_Number, title, date_of_borrow, delay){
    const obj = {
      ID_Number: ID_Number,
      title: title,
      date_of_borrow: date_of_borrow,
      delay: delay
    };
    console.log(obj);
    this.http.post(`${this.uri}/addConnection`, obj).subscribe(res => console.log('Done'));
  }

  getCustomer(){
    return this.http.get(`${this.uri}`);
  }
  getDVD(){
    return this.http.get(`${this.uri}`);
  }
  getConnection(){
    return this.http.get(`${this.uri}`);
  }
  editCustomer(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  editConnection(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateCustomer(person_name, phone_number, ID_Number, zip_code, city, street, house_number){
    const obj = {
      person_name: person_name,
      phone_number: phone_number,
      ID_Number: ID_Number,
      zip_code: zip_code,
      city: city,
      street: street,
      house_number: house_number
    };
    this.http.post(`${this.uri}/update/`, obj).subscribe(
      res => console.log('Done'));
  }

  updateDVD(title, date_of_get, number_, State){
    const obj = {
      title: title,
      date_of_get: date_of_get,
      number_: number_,
      State: State,
    };
    this.http.post(`${this.uri}/update/`, obj).subscribe(
      res => console.log('Done'));
  }
  updateConnection(ID_Number, title, date_of_borrow, delay){
    const obj = {
      ID_Number: ID_Number,
      title: title,
      date_of_borrow: date_of_borrow,
      delay: delay
    };
    this.http.post(`${this.uri}/update/`, obj).subscribe(
      res => console.log('Done'));
  }
  deleteCustomer(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
  deleteDVD(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
  deleteConnection(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

