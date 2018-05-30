import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-alert',
  templateUrl: './master-alert.component.html',
  styleUrls: ['./master-alert.component.scss']
})
export class MasterAlertComponent implements OnInit {

  constructor(private router: Router) { }
  data: any[] = [
    {
      "alert" : 'AlertTest1',
      "count" : 5,
    },
    {
      "alert" : 'AlertTest2',
      "count" : 6,
    },
    {
      "alert" : 'AlertTest3',
      "count" : 3,
    },
  ]

  ngOnInit() {

  }

  create() {
    this.router.navigate(['master-alert/create'])
  }

}
