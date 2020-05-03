import { Component, OnInit } from '@angular/core';
import {DVD} from '../DVD';
import {AppService} from '../app.service';

@Component({
  selector: 'app-dvd-get',
  templateUrl: './dvd-get.component.html',
  styleUrls: ['./dvd-get.component.css']
})
export class DVDGetComponent implements OnInit {

  DVDs: DVD[];
  searchText: string;

  constructor(private as: AppService) { }

  public ngOnInit(): void {
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.DVDs = data;
    });
  }
  deleteDVD(id) {
    this.as.deleteDVD(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
