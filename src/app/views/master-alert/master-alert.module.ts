import { NgModule } from '@angular/core';
import { MasterAlertRoutingModule } from './master-alert-routing.module';

import { MasterAlertComponent } from './master-alert.component';
import { FormAlertComponent } from './form-alert/form-alert.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    MasterAlertRoutingModule
    , SharedModule
  ],
  declarations: [
    MasterAlertComponent
    , FormAlertComponent
  ]
})
export class MasterAlertModule { }
