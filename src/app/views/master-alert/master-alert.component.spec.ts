import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAlertComponent } from './master-alert.component';

describe('MasterAlertComponent', () => {
  let component: MasterAlertComponent;
  let fixture: ComponentFixture<MasterAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
