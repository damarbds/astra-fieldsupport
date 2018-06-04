import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { MasterFeedbackComponent } from './master-feedback.component';
import { MasterFormComponent } from './master-form/master-form.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';


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
    },

    {
      path: 'edit/:id',
      component: MasterFormComponent,
      data: {
        title: 'Edit Feedback Options'
      }
    },

    {
      path: 'detail/:id',
      component: MasterDetailComponent,
      data: {
        title: 'Detail Feedback Options'
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