import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  data: any;
  reportChoice: number = 0;
  option: any = {
    ticketStatus: 0,
    userFeedback: 1,
  }
  show: any = {
    ticketStatus: false,
    userFeedback: false,
  }
  itemsOnPage: any = [];
  initialPage: number = 0;
  itemsPerPage: number = 3;
  maxSize: number = 5;
  selectedTicketStatus: Array<number> = [];

  constructor() { }

  ngOnInit() {
    let now = moment();
    let createdDate = moment().subtract(3, 'hours');
    let expectedTime = moment().add(2, 'hours');
    this.data = {
      ticketStatus: [
        {
          id: 1,
          SLA: expectedTime.from(now),
          expectedTime: expectedTime.format('hh:mm a'),
          ticketNo: 101,
          ticketCreatedDate: createdDate.format('MM/DD/YY'),
          requester: 'Steven Yang',
          group: 'S001',
          category: 'Software',
          subCategory: '.NET',
          description: '.NET got a lot of bugs',
          PICName: 'Leslie Aula',
          status: false
        },
        {
          id: 2,
          SLA: expectedTime.from(now),
          expectedTime: expectedTime.format('hh:mm a'),
          ticketNo: 221,
          ticketCreatedDate: createdDate.format('MM/DD/YY'),
          requester: 'Jacky Rusly',
          group: 'S002',
          category: 'Software',
          subCategory: 'Java',
          description: 'Java got a lot of bugs',
          PICName: 'Leslie Aula',
          status: true
        },
        {
          id: 3,
          SLA: expectedTime.from(now),
          expectedTime: expectedTime.format('hh:mm a'),
          ticketNo: 313,
          ticketCreatedDate: createdDate.format('MM/DD/YY'),
          requester: 'Achmad Lucky',
          group: 'S003',
          category: 'Software',
          subCategory: 'Javascript',
          description: 'My issue is that I dont get any bugs',
          PICName: 'Leslie Aula',
          status: false
        },
        {
          id: 4,
          SLA: expectedTime.from(now),
          expectedTime: expectedTime.format('hh:mm a'),
          ticketNo: 401,
          ticketCreatedDate: createdDate.format('MM/DD/YY'),
          requester: 'Steven Yang',
          group: 'S001',
          category: 'Software',
          subCategory: '.NET',
          description: '.NET got a lot of bugs',
          PICName: 'Leslie Aula',
          status: false
        },
        {
          id: 5,
          SLA: expectedTime.from(now),
          expectedTime: expectedTime.format('hh:mm a'),
          ticketNo: 521,
          ticketCreatedDate: createdDate.format('MM/DD/YY'),
          requester: 'Jacky Rusly',
          group: 'S002',
          category: 'Software',
          subCategory: 'Java',
          description: 'Java got a lot of bugs',
          PICName: 'Leslie Aula',
          status: true
        }
      ]
    }
    const startItem = this.initialPage * this.itemsPerPage;
    const endItem = (this.initialPage + 1) * this.itemsPerPage;
    this.constructPage(startItem, endItem);
  }

  pageChanged(e: PageChangedEvent): void {
    const startItem = (e.page - 1) * e.itemsPerPage;
    const endItem = e.page * e.itemsPerPage;
    this.constructPage(startItem, endItem);
  }

  constructPage(startIndex, endIndex) {
    this.itemsOnPage = this.data.ticketStatus.slice(startIndex, endIndex);
    this.itemsOnPage.forEach(item => {
      item.action = this.selectedTicketStatus.includes(item.id);
    })
  }

  addSelectedTicketStatus(e, id): void {
    if (e.target.checked && !this.selectedTicketStatus.includes(id))
      this.selectedTicketStatus.push(id);
    else if (!e.target.checked)
      _.remove(this.selectedTicketStatus, item => (item === id));
  }

  downloadExcel() {
    console.log(this.selectedTicketStatus);
  }

  hideAllReport() {
    const props = Object.keys(this.show);
    props.forEach(prop => {
      this.show[prop] = false;
    });
  }

  showReport(choice) {
    this.hideAllReport();
    switch (choice) {
      case 0:
        this.show.ticketStatus = true;
        break;
      case 1:
        this.show.userFeedback = true;
        break;
    }
  }
}
