import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackFsPositionComponent } from './track-fs-position.component';

const routes: Routes = [
  {
    path: '',
    component: TrackFsPositionComponent,
    data: {
      title: 'Track FS Position'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackFsPositionRoutingModule { }
