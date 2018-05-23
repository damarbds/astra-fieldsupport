import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { MasterFeedbackComponent } from './master-feedback.component';
import { MasterFormComponent } from './master-form/master-form.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master Feedback'
    },
    children: [{
      path: '',
      component: MasterFeedbackComponent,
      data: {
        title: ''
      }
    },
    
    {
      path: 'create',
      component: MasterFormComponent,
      data: {
        title: 'Create Data'
      }
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterFeedbackRoutingModule {}