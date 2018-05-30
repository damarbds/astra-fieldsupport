import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-master-alert',
  templateUrl: './master-alert.component.html',
  styleUrls: ['./master-alert.component.scss']
})
export class MasterAlertComponent implements OnInit {
  data: any = [];
  search:string = '';
  count: number;
  returnData: any = [];

  //pagination
  itemsPerPage: number = 3;
  maxSize: number = 6;
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.data = [
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
      {
        "alert" : 'AlertTest4',
        "count" : 5,
      },
      {
        "alert" : 'AlertTest5',
        "count" : 6,
      },
      {
        "alert" : 'AlertTest6',
        "count" : 3,
      },
    ]
    this.count = 6;
    this.returnData = this.data.slice(0, 3);
    
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnData = this.data.slice(startItem, endItem);
  }

  create() {
    this.router.navigate(['master-alert/create'])
  }

  findData(keyword){
    console.log(keyword);
    this.data = [
      {
        "alert" : 'AlertTestSearch1',
        "count" : 5,
      },
      {
        "alert" : 'AlertTestSearch2',
        "count" : 6,
      },
      {
        "alert" : 'AlertTestSearch3',
        "count" : 3,
      },
      {
        "alert" : 'AlertTestSearch4',
        "count" : 5,
      },
      {
        "alert" : 'AlertTestSearch5',
        "count" : 6,
      },
      {
        "alert" : 'AlertTestSearch6',
        "count" : 3,
      },
    ]
    this.count = 6;
    this.returnData = this.data.slice(0, 3);
  }

  clearSearch(){
    this.search = ' ';
  }

}
