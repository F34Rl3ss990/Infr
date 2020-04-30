import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Connection} from '../Connection';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.css']
})
export class BorrowListComponent implements OnInit {
  connections: Connection[];
  searchText: string;

  constructor(private as: AppService) { }

  ngOnInit(): void {
    this.as.getCustomer().subscribe((data: Connection[]) => {
      this.connections = data;
    });
  }
}
