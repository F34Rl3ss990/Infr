import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Connection} from '../Connection';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.css']
})


export class BorrowListComponent implements OnInit {
  Connections: Connection[];
  dvd: any[] = [];
  searchText: string;
  ModdedConnectionForDVD: Connection[];
  date: Date;
  dateForCheck: Number;

  constructor(private as: AppService) { }

  ngOnInit(): void {
    this.as.getConnection().subscribe((data: Connection[]) => {
      this.Connections = data;
      console.log(data)
      this.fasz()
      let dateString = Date.now()
      this.date = (new Date(dateString));
    });

  }
  public fasz(){
    var ConnectionArray: any [] = [];
    ConnectionArray.push(this.Connections)
    for(const connection of ConnectionArray){
      var i = 0;
      this.dateForCheck = connection[i]["dvd"].dateOfBorrow
      this.ModdedConnectionForDVD = connection[i]["dvd"];
      console.log(connection[i]["dvd"])
      i++;
    }
  }

  convertDate(dateOfBorrow){
    let asd = Math.abs((new Date(this.date).getTime())- (new Date(dateOfBorrow).getTime()))
    let bsd =Math.ceil(asd/(1000*3600*24))
    return bsd;
  }
}
