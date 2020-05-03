import { Component, OnInit } from '@angular/core';
import {DVD} from '../DVD';
import {AppService} from '../app.service';
import {Connection} from '../Connection';

@Component({
  selector: 'app-bring-back',
  templateUrl: './bring-back.component.html',
  styleUrls: ['./bring-back.component.css']
})
export class BringBackComponent implements OnInit {
  Connections: Connection[];
  dvd: any[] = [];
  searchText: string;
  ModdedConnectionForDVD: Connection[];


  constructor(private as: AppService) { }

  ngOnInit(): void {
    this.as.getConnection().subscribe((data: Connection[]) => {
      this.Connections = data;
      console.log(data)
      this.fasz()

    });

  }
  public fasz(){
    var ConnectionArray: any [] = [];
    ConnectionArray.push(this.Connections)
    for(const connection of ConnectionArray){
          var i = 0;
          this.ModdedConnectionForDVD = connection[i]["dvd"];
          console.log(connection[i]["dvd"])
          i++;
        }
      }
  deleteFromConnection(dvdID, connectionID){
    console.log("1. lépés")
    console.log(dvdID)
    this.as.deleteFromConnection(dvdID, connectionID);

  }

}
