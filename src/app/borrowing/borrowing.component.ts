import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DVD} from '../DVD';
import {Connection} from '../Connection';
import {Customer} from '../Customer';
import {iterator} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})

export class BorrowingComponent implements OnInit {
  DVDs: DVD[];
  Connections: Connection[];
  searchText: string;
  Customers: Customer[];
  ModdedConnection: Connection[];
  constructor(private as: AppService, private router: Router,
              private route: ActivatedRoute) {

  }



  public ngOnInit(): void {
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.DVDs = data;
    });
    this.route.params.subscribe(params => {
    this.as.getCustomerById(params.id).subscribe((data: Customer[]) => {
      this.Customers = data;
      this.as.getConnection().subscribe((data2: Connection[]) => {
        this.Connections = data2;
        this.fasz();
      });
    });

    });

   // console.log(this.Customers)
}


public fasz(){
  let ConnectionID;
  var CustomerArray: any [] = [];
  var ConnectionArray: any[] = [];
  ConnectionArray.push(this.Connections)
  CustomerArray.push(this.Customers)
  for(const customerx of CustomerArray){
    for (const connection of ConnectionArray) {
      var i = 0;
      if (customerx.ID_Number === connection[i]["customer"]["ID_Number"]) {
        ConnectionID =connection[i]["_id"]
        console.log(connection[i]["dvd"])
        this.ModdedConnection = connection[i]["dvd"];
      } else {
        i++;
        console.log(i)

      }
    }
  }
}
  addDVDtoConnection(DVDid, title){
    let ConnectionID;
    var CustomerArray: any [] = [];
    var ConnectionArray: any[] = [];
    ConnectionArray.push(this.Connections)
    CustomerArray.push(this.Customers)
    for(const customerx of CustomerArray){
     for (const connection of ConnectionArray) {
      var i = 0;
       if (customerx.ID_Number === connection[i]["customer"]["ID_Number"]) {
         ConnectionID =connection[i]["_id"]

       } else {
         i++;

       }
     }
   }
    console.log(ConnectionID)
    this.as.addDVDtoConnection(DVDid, title, ConnectionID);
  }

}
