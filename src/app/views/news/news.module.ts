import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ListComponent } from './list.component';
import { UpsertComponent } from './upsert.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [
    ListComponent
    , UpsertComponent
  ]
})
export class NewsModule { }
