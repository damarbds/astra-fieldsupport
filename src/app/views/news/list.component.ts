import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  news: any;

  query: any;

  constructor() {
  }

  ngOnInit() {
    this.news = [
      {
        id: 1,
        title: 'Pengumuman Hari Raya Nyepi',
        startDate: '12/05/2018',
        endDate: '12/05/2018'
      }
    ];
  }

}
