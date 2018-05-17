import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [CommonModule, FormsModule, ReportRoutingModule, BsDatepickerModule.forRoot(), PaginationModule.forRoot()],
  declarations: [ReportComponent]
})
export class ReportModule { }
