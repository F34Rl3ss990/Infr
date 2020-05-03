import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-dvd-add',
  templateUrl: './dvd-add.component.html',
  styleUrls: ['./dvd-add.component.css']
})
export class DVDAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AppService) { this.createForm();}

  createForm(){
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      dateOfGet: ['', Validators.required]
    });
  }
  addDVD(title, dateOfGet){
    this.as.addDVD(title, dateOfGet);
  }
  ngOnInit(): void {
  }

}
