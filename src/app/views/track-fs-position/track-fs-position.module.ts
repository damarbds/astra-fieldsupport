import { NgModule } from '@angular/core';

import { TrackFsPositionRoutingModule } from './track-fs-position-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrackFsPositionComponent } from './track-fs-position.component';

@NgModule({
  imports: [
    SharedModule,
    TrackFsPositionRoutingModule
  ],
  declarations: [
    TrackFsPositionComponent
  ]
})
export class TrackFsPositionModule { }
