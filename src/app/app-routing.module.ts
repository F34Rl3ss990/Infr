import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BorrowListComponent} from './borrow-list/borrow-list.component';
import {BringBackComponent} from './bring-back/bring-back.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerGetComponent} from './customer-get/customer-get.component';
import {DVDAddComponent} from './dvd-add/dvd-add.component';
import {DvdBorrowComponent} from './dvd-borrow/dvd-borrow.component';
import {DVDEditComponent} from './dvd-edit/dvd-edit.component';
import {DVDGetComponent} from './dvd-get/dvd-get.component';
import {OpenerComponent} from './opener/opener.component';
import {BorrowingComponent} from './borrowing/borrowing.component';


const routes: Routes = [

  {path: 'borrow-list', component: BorrowListComponent},
  {path: 'bring-back', component: BringBackComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'customer-get', component: CustomerGetComponent},
  {path: 'dvd-add', component: DVDAddComponent},
  {path: 'dvd-borrow', component: DvdBorrowComponent},
  {path: 'dvd-edit', component: DVDEditComponent},
  {path: 'dvd-get', component: DVDGetComponent},
  {path: 'home', component: OpenerComponent},
  {path: 'borrowing', component: BorrowingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
