import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { DVDGetComponent } from './dvd-get/dvd-get.component';
import { DVDAddComponent } from './dvd-add/dvd-add.component';
import { BringBackComponent } from './bring-back/bring-back.component';
import { DvdBorrowComponent } from './dvd-borrow/dvd-borrow.component';
import { BorrowListComponent } from './borrow-list/borrow-list.component';
import { HeaderComponent } from './header/header.component';
import {SlimLoadingBarModule, SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { OpenerComponent } from './opener/opener.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DvdSearchComponent } from './dvd-search/dvd-search.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerGetComponent,
    DVDGetComponent,
    DVDAddComponent,
    BringBackComponent,
    DvdBorrowComponent,
    BorrowListComponent,
    HeaderComponent,
    OpenerComponent,
    BorrowingComponent,
    DvdSearchComponent,
    CustomerSearchComponent,
    FilterPipe
  ],
  exports: [AppComponent],

  imports: [
    SlimLoadingBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [SlimLoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
