import { NgModule } from '@angular/core';
import { MasterFeedbackRoutingModule } from './master-feedback-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MasterFeedbackComponent } from './master-feedback.component';
import { MasterFormComponent } from './master-form/master-form.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  imports: [
    SharedModule
    , MasterFeedbackRoutingModule
  ],
  declarations: [
    MasterFeedbackComponent,
    MasterFormComponent,
    MasterDetailComponent
  ]
})
export class MasterFeedbackModule { }
