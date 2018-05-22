import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { MasterAlertComponent } from './master-alert.component';
import { FormAlertComponent } from './form-alert/form-alert.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master Alert'
    },
    children: [{
        path: '',
        component: MasterAlertComponent,
        data: {
            title: ''
        }
    },

    {
        path: 'create',
        component: FormAlertComponent,
        data: {
            title: 'Create Master Alert'
        }
    }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAlertRoutingModule {}
