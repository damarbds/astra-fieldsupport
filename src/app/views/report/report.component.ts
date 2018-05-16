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
  initialPage: number = 0;
  itemsPerPage: number = 3;
  maxSize: number = 5;
  itemsOnPage: any = [];
  selectedTicketStatus: Array<number> = [];
  selectedUserFeedback: Array<number> = [];

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
      ],
      userFeedback: [
        {
          id: 1,
          rating: 1,
          additionalFeedback: 'Please improve the language',
          comment: 'Too bad bro',
          ticketNo: 10002,
          ticketCreatedDate: createdDate.format('MM/DD/YY'),
          requester: 'Steven Yang',
          group: 'S001',
          category: 'Software',
          subCategory: '.NET',
          description: '.NET got a lot of bugs',
          PICName: 'Leslie Aula'
        },
        {
          id: 11,
          rating: 2,
          additionalFeedback: 'What a bad language!',
          comment: 'No comment sis',
          ticketNo: 10006,
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
          id: 12,
          rating: 5,
          additionalFeedback: 'You guys are rock',
          comment: 'No comment! Too good!',
          ticketNo: 10002,
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
          id: 13,
          rating: 1,
          additionalFeedback: 'The language sucks really hard',
          comment: 'Worse!',
          ticketNo: 10011,
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
          id: 14,
          rating: 3,
          additionalFeedback: 'Decent service, but not incredible',
          comment: 'So so',
          ticketNo: 10012,
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
  }

  getInitialPage() {
    const startIndex = this.initialPage * this.itemsPerPage;
    const endIndex = (this.initialPage + 1) * this.itemsPerPage;
    return {
      startIndex,
      endIndex
    }
  }

  getCurrentPage(e) {
    const startIndex = (e.page - 1) * e.itemsPerPage;
    const endIndex = e.page * e.itemsPerPage;
    return {
      startIndex,
      endIndex
    }
  }

  addActionToItems(selectedItemIds) {
    this.itemsOnPage.forEach(item => {
      item.action = selectedItemIds.includes(item.id);
    })
  }

  ticketStatusPageChanged(e: PageChangedEvent) {
    const currentPage = this.getCurrentPage(e);
    this.itemsOnPage = this.data.ticketStatus.slice(currentPage.startIndex, currentPage.endIndex); // getTicketStatus by defined page
    this.addActionToItems(this.selectedTicketStatus);
  }

  userFeedbackPageChanged(e: PageChangedEvent) {
    const currentPage = this.getCurrentPage(e);
    this.itemsOnPage = this.data.userFeedback.slice(currentPage.startIndex, currentPage.endIndex); // getUserFeedback by defined page
    this.addActionToItems(this.selectedUserFeedback);
  }

  manageSelectedAction(items, e, id) {
    if (e.target.checked && !items.includes(id))
      items.push(id);
    else if (!e.target.checked)
      _.remove(items, item => (item === id));
  }

  manageSelectedTicketStatus(e, id): void {
    this.manageSelectedAction(this.selectedTicketStatus, e, id);
  }

  manageSelectedUserFeedback(e, id): void {
    this.manageSelectedAction(this.selectedUserFeedback, e, id);
  }

  downloadTicketStatusExcel() {
    console.log(this.selectedTicketStatus);
  }

  downloadUserFeedbackExcel() {
    console.log(this.selectedUserFeedback);
  }

  hideAllReport() {
    const props = Object.keys(this.show);
    props.forEach(prop => {
      this.show[prop] = false;
    });
    this.itemsOnPage = [];
    this.selectedTicketStatus = [];
    this.selectedUserFeedback = [];
  }

  showReport(choice) {
    this.hideAllReport();
    const initialPage = this.getInitialPage();
    switch (choice) {
      case 0:
        this.show.ticketStatus = true;
        this.itemsOnPage = this.data.ticketStatus.slice(initialPage.startIndex, initialPage.endIndex); // getTicketStatus by first page
        break;
      case 1:
        this.show.userFeedback = true;
        this.itemsOnPage = this.data.userFeedback.slice(initialPage.startIndex, initialPage.endIndex); // getUserFeedback by first page
        break;
    }
    this.addActionToItems(this.itemsOnPage);
  }
}
