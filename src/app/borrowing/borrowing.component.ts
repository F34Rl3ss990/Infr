import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DVD} from '../DVD';
import {Connection} from '../Connection';
import {Customer} from '../Customer';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent implements OnInit {
  DVDs: DVD[];
  Customers: Customer[];
  Connections: Connection[];
  searchText: string;
  constructor(private as: AppService, private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.DVDs = data;
    });

}
}
