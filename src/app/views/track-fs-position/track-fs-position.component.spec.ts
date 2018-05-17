import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFsPositionComponent } from './track-fs-position.component';

describe('TrackFsPositionComponent', () => {
  let component: TrackFsPositionComponent;
  let fixture: ComponentFixture<TrackFsPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackFsPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackFsPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
