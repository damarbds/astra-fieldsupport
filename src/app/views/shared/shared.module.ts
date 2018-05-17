import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    NgSelectModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBmqS47JjlRfN_UPZHtBVeQ1nh9iFVRGfU' })
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule,
    PaginationModule,
    NgSelectModule,
    AgmCoreModule
  ]
})
export class SharedModule { }
