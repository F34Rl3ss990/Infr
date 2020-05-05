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
import { BorrowListComponent } from './borrow-list/borrow-list.component';
import {SlimLoadingBarModule, SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { OpenerComponent } from './opener/opener.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SuccessfulDvdAddComponent } from './successful-dvd-add/successful-dvd-add.component';
import { SuccessfulDvdUpdateComponent } from './successful-dvd-update/successful-dvd-update.component';
import { SuccessfulCustomerUpdateComponent } from './successful-customer-update/successful-customer-update.component';
import { SuccessfulCustomerAddComponent } from './successful-customer-add/successful-customer-add.component';
import { SuccessfulBorrowAddComponent } from './successful-borrow-add/successful-borrow-add.component';
import { SuccessfulBorrowRemoveComponent } from './successful-borrow-remove/successful-borrow-remove.component';
import { SuccessfulCustomerDeleteComponent } from './successful-customer-delete/successful-customer-delete.component';
import { OnCreateDirective } from './on-create.directive';



@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerGetComponent,
    DVDGetComponent,
    DVDAddComponent,
    BringBackComponent,
    BorrowListComponent,
    OpenerComponent,
    BorrowingComponent,
    FilterPipe,
    SuccessfulDvdAddComponent,
    SuccessfulDvdUpdateComponent,
    SuccessfulCustomerUpdateComponent,
    SuccessfulCustomerAddComponent,
    SuccessfulBorrowAddComponent,
    SuccessfulBorrowRemoveComponent,
    SuccessfulCustomerDeleteComponent,
    OnCreateDirective
  ],
  exports: [AppComponent],

    imports: [
        SlimLoadingBarModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatPaginatorModule
    ],
  providers: [SlimLoadingBarService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
