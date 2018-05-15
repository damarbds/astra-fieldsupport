import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsUpsertComponent } from './news-upsert.component';
import { NewsListComponent } from './news-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: NewsListComponent,
    data: {
      title: 'News'
    }
  },
  {
    path: 'upsert',
    component: NewsUpsertComponent,
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
