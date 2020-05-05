import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  uri = 'http://localhost:4000/app/';

  constructor(private http: HttpClient) {}
  addCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number){
    const obj = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      ID_Number: ID_Number,
      address:{
        zip_code: zip_code,
        city_: city_,
        street: street,
        house_number: house_number
      }
    };
    console.log(obj);

    this.http.post(`${this.uri}Customeradd`, obj).subscribe(res => console.log('Done Customer'));


    const obj2 ={
      customer:{
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        ID_Number: ID_Number
      }
      /*dvd:{
        dateOfBorrow: "",
        title: "",
        id: "",
      }*/
    };
    this.http.post(`${this.uri}ConnectionAdd`, obj2).subscribe(res => console.log('Done Connection'));

  }

  addDVD(title, dateOfGet){
    const obj = {
      title: title,
      dateOfGet: dateOfGet
    };
    console.log(obj);
    this.http.post(`${this.uri}addDVD/`, obj).subscribe(res => console.log('Done'));
  }

  addConnection(ID_Number, title, date_of_borrow, delay){
    const obj = {
      ID_Number: ID_Number,
      title: title,
      date_of_borrow: date_of_borrow,
      delay: delay
    };
    console.log(obj);
    this.http.post(`${this.uri}addConnection/`, obj).subscribe(res => console.log('Done'));
  }

  getCustomer(){
    return this.http.get(`${this.uri}getCustomer/`);
  }
  getCustomerById(id){
    return this.http.get(`${this.uri}getCustomer/${id}`);
  }
  getDVD(){
    return this.http.get(`${this.uri}getDVD/`);
  }
  getConnection(){
    return this.http.get(`${this.uri}getConnection`);
  }
  editCustomer(id){
    console.log(id)
    return this.http.get(`${this.uri}editCustomer/${id}`);
  }
  deleteFromConnection(dvdid, connectionID){
    const obj = {
      _id: dvdid
    }
      console.log("2.lépés")
      console.log(connectionID)
    this.http.post(`${this.uri}bringBack/asd/${connectionID}`, obj).subscribe(res => console.log('Done'));
  }
  addDVDtoConnection(DVDid, title, ConnectionID){
    const obj = {
        id: DVDid,
        title: title,
        state: "borrowed"
      }
    console.log(obj);
    console.log(ConnectionID);
    this.http.post(`${this.uri}updateConnectionWithDVD/${ConnectionID}`, obj).subscribe(res => console.log('Done'));
  }

  editConnection(id){
    return this.http.get(`${this.uri}editConnection/${id}`);
  }

  updateCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number, id){
    const obj = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      ID_Number: ID_Number,
      address:{
        zip_code: zip_code,
        city_: city_,
        street: street,
        house_number: house_number
      }
    };
    this.http.post(`${this.uri}Customerupdate/${id}`, obj).subscribe(
      res => console.log('Done'));
   /* const obj2 ={
      customer:{
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        ID_Number: ID_Number
      }
      /*dvd:{
        dateOfBorrow: "",
        title: "",
        id: "",
      }*/
   /* };
    this.http.post(`${this.uri}ConnectionAdd`, obj2).subscribe(res => console.log('Done Connection'));*/
  }

  updateDVD(title, date_of_get, number_, State){
    const obj = {
      title: title,
      date_of_get: date_of_get,
      number_: number_,
      State: State,
    };
    this.http.post(`${this.uri}updateDVD/`, obj).subscribe(
      res => console.log('Done'));
  }
  deleteCustomerFromConnTemp(first_name, last_name, phone_number, ID_Number, id, customerID){
    const obj ={
      customer:{
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        ID_Number: ID_Number,
        id: customerID
      }
    };
    console.log(id)
    this.http.post(`${this.uri}deleteCustomerFromConnection/asd/${id}`, obj).subscribe(res => console.log('Done'));
  }
  UpdateConnectionWithCustomer(first_name, last_name, phone_number, ID_Number, id){
    const obj ={
      customer:{
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        ID_Number: ID_Number,
      }
    };
    console.log(id)
    this.http.post(`${this.uri}updateConnectionWithCustomer/asd/asd/${id}`, obj).subscribe(res => console.log('Done'));
  }

  deleteCustomer(id) {
    return this
      .http
      .get(`${this.uri}getCustomer/delete/${id}`);
  }
  updateDVDwithWaste(id) {

    const obj ={
      state: "wasted"
    }
    this.http.post(`${this.uri}getWastedLOL/asd/asd/asd/${id}`, obj).subscribe(res => console.log('Done'));
  }
  updateDVDwithBorrowed(id) {
    console.log(id)
    const obj ={
      state: "borrowed"
    }
    this.http.post(`${this.uri}getBorrowedLOL/asd/asd/asd/asd/${id}`, obj).subscribe(res => console.log('Done'));
  }
  updateDVDwithFree(id) {
    console.log(id)
    const obj ={
      state: "szabad"
    }
    this.http.post(`${this.uri}getBorrowedLOL/asd/asd/asd/asd/${id}`, obj).subscribe(res => console.log('Done'));
  }
  deleteConnection(id) {
    return this
      .http
      .get(`${this.uri}deleteConnection/${id}`);
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

