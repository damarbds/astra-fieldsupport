import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { UpsertComponent } from './upsert.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: 'News'
    }
  },
  {
    path: 'upsert',
    component: UpsertComponent,
    data: {
      title: 'Upsert'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
