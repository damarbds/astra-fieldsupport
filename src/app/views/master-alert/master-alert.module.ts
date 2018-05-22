import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterAlertComponent } from './master-alert.component';
import { MasterAlertRoutingModule } from './master-alert-routing.module';
import { FormAlertComponent } from './form-alert/form-alert.component';

@NgModule({
  imports: [
    CommonModule,
    MasterAlertRoutingModule,
  ],
  declarations: [MasterAlertComponent, FormAlertComponent]
})
export class MasterAlertModule { }
