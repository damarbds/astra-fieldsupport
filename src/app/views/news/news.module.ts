import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsUpsertComponent } from './news-upsert.component';
import { SharedModule } from '../shared/shared.module';
import { NewsListComponent } from './news-list.component';

@NgModule({
  imports: [
    SharedModule
    , NewsRoutingModule
  ],
  declarations: [
    NewsListComponent
    , NewsUpsertComponent
  ]
})
export class NewsModule { }
