import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  imports: [CommonModule, ReportRoutingModule, BsDatepickerModule.forRoot()],
  declarations: [ReportComponent]
})
export class ReportModule {}
