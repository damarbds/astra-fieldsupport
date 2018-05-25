import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterFeedbackComponent } from './master-feedback.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MasterFormComponent } from './master-form/master-form.component';
import { MasterFeedbackRoutingModule } from './master-feedback-routing.module';
import { MasterFeedbackService } from '../../services/master-service/master-feedback.service';
import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MasterFeedbackRoutingModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [MasterFeedbackComponent, MasterFormComponent, MasterDetailComponent],
  providers: [MasterFeedbackService]
})
export class MasterFeedbackModule { }
