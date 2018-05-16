import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsUpsertComponent } from './news-upsert.component';
import { SharedModule } from '../shared/shared.module';
import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from './news-detail.component';

@NgModule({
  imports: [
    SharedModule
    , NewsRoutingModule
  ],
  declarations: [
    NewsListComponent
    , NewsUpsertComponent
    , NewsDetailComponent
  ]
})
export class NewsModule { }
