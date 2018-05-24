import { Component, OnInit } from "@angular/core";
import { PageChangedEvent } from "ngx-bootstrap/pagination";
import * as moment from "moment";
import * as _ from "lodash";
import { ReportService } from "../../services/report.service";
import { ApiResponseQuery, TicketStatusReport, PageQuery } from "../../models";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})
export class ReportComponent implements OnInit {
  data: any;
  reportChoice: number = 0;
  option: any = {
    ticketStatus: 0,
    userFeedback: 1
  };
  period: Date[];
  periodHasError: boolean = false;
  show: any = {
    ticketStatus: false,
    userFeedback: false
  };

  pageQuery: PageQuery = new PageQuery();
  maxSize: number = 5;
  itemsOnPage: any = [];

  isAll: boolean = false;
  allChecked: boolean = false;
  allIndeterminate: boolean = false;
  selectedIds: Array<number> = [];
  unselectedIds: Array<number> = [];
  dummyUserFeedback: any = [];
  dummyTicketStatus: any = [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    let createdDate = moment().subtract(3, "hours");
    let expectedTime = moment().add(2, "hours");
    this.dummyTicketStatus = [
      {
        id: 1,
        SLA: "2h:42m",
        expectedTime: expectedTime.format("hh:mm a"),
        ticketNo: 101,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Steven Yang",
        group: "S001",
        category: "Software",
        subCategory: ".NET",
        description:
          ".NET got a lot of bugs asdfasfa jashdfkjl kjasdhfkjasd kajdshfkhasdif kjasdhfkahsdfkj kas dfkhasfkjas dfkahs fhjaksdfkhas dsdfa adkjsfl asdfldjas fladjsfkljasdfkl asdfljasdf dkasf kldkjasfkl jasdf klasdjfkljaskdfjkl asdlf kljasfkljdlsjfkl daskjf jasdlijfklasdhjfl asd fkjasdfjhdkjashfasdjk fsdkjfhkjasdhfkj",
        PICName: "Leslie Aula",
        status: false
      },
      {
        id: 2,
        SLA: "2h:42m",
        expectedTime: expectedTime.format("hh:mm a"),
        ticketNo: 221,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Jacky Rusly",
        group: "S002",
        category: "Software",
        subCategory: "Java",
        description: "Java got a lot of bugs",
        PICName: "Leslie Aula",
        status: true
      },
      {
        id: 3,
        SLA: "2h:42m",
        expectedTime: expectedTime.format("hh:mm a"),
        ticketNo: 313,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Achmad Lucky",
        group: "S003",
        category: "Software",
        subCategory: "Javascript",
        description: "My issue is that I dont get any bugs",
        PICName: "Leslie Aula",
        status: false
      },
      {
        id: 4,
        SLA: "2h:42m",
        expectedTime: expectedTime.format("hh:mm a"),
        ticketNo: 401,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Steven Yang",
        group: "S001",
        category: "Software",
        subCategory: ".NET",
        description: ".NET got a lot of bugs",
        PICName: "Leslie Aula",
        status: false
      },
      {
        id: 5,
        SLA: "2h:42m",
        expectedTime: expectedTime.format("hh:mm a"),
        ticketNo: 521,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Jacky Rusly",
        group: "S002",
        category: "Software",
        subCategory: "Java",
        description: "Java got a lot of bugs",
        PICName: "Leslie Aula",
        status: true
      }
    ];
    this.dummyUserFeedback = [
      {
        id: 1,
        rating: 1,
        additionalFeedback: "Please improve the language",
        comment: "Too bad bro",
        ticketNo: 10002,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Steven Yang",
        group: "S001",
        category: "Software",
        subCategory: "Pascal",
        description: "Pascal got a lot of bugs",
        PICName: "Leslie Aula"
      },
      {
        id: 11,
        rating: 2,
        additionalFeedback: "What a bad language!",
        comment: "No comment sis",
        ticketNo: 10006,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Jacky Rusly",
        group: "S002",
        category: "Software",
        subCategory: "Java",
        description: "Java got a lot of bugs",
        PICName: "Leslie Aula",
        status: true
      },
      {
        id: 12,
        rating: 5,
        additionalFeedback: "You guys are rock",
        comment: "No comment! Too good!",
        ticketNo: 10002,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Achmad Lucky",
        group: "S003",
        category: "Software",
        subCategory: "Javascript",
        description: "My issue is that I dont get any bugs",
        PICName: "Leslie Aula",
        status: false
      },
      {
        id: 13,
        rating: 1,
        additionalFeedback: "The language sucks really hard",
        comment: "Worse!",
        ticketNo: 10011,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Steven Yang",
        group: "S001",
        category: "Software",
        subCategory: "Pascal",
        description: "Pascal got a lot of bugs",
        PICName: "Leslie Aula",
        status: false
      },
      {
        id: 14,
        rating: 3,
        additionalFeedback: "Decent service, but not incredible",
        comment: "So so",
        ticketNo: 10012,
        ticketCreatedDate: createdDate.format("MM/DD/YY"),
        requester: "Jacky Rusly",
        group: "S002",
        category: "Software",
        subCategory: "Java",
        description: "Java got a lot of bugs",
        PICName: "Leslie Aula",
        status: true
      }
    ];
    this.data = {
      items: []
    };
  }

  getPage() {
    const startIndex = (this.pageQuery.page - 1) * this.pageQuery.size;
    const endIndex = this.pageQuery.page * this.pageQuery.size;
    return {
      startIndex,
      endIndex
    };
  }

  getCurrentPage(e) {
    this.pageQuery.page = e.page;
    this.getPage();
  }

  toChecked() {
    this.allChecked = true;
    this.allIndeterminate = false;
  }

  toIndeterminate() {
    this.allChecked = false;
    this.allIndeterminate = true;
  }

  toUnchecked() {
    this.allChecked = false;
    this.allIndeterminate = false;
  }

  selectAllAction(e) {
    this.isAll = e.target.checked;
    if (e.target.checked) this.toChecked();
    else this.toUnchecked();
    this.data.items.forEach(item => {
      item.action = this.isAll;
    });
    this.selectedIds = [];
    this.unselectedIds = [];
  }

  manageCheckedItemsOnPage() {
    this.data.items.forEach(item => {
      item.action = this.isAll
        ? !this.unselectedIds.includes(item.id)
        : this.selectedIds.includes(item.id);
    });
  }

  pageChanged(e: PageChangedEvent) {
    this.getCurrentPage(e);
    if (this.show.ticketStatus && !this.show.userFeedback) {
      this.fetchTicketStatuses();
    } else if (!this.show.ticketStatus && this.show.userFeedback) {
      this.fetchUserFeedbacks();
    }
  }

  manageCheckboxByUnselected(unselectedItems, totalData) {
    let totalUnselectedItems = unselectedItems.length;
    if (totalUnselectedItems === totalData) {
      this.toUnchecked();
    } else if (totalUnselectedItems < totalData && totalUnselectedItems > 0) {
      this.toIndeterminate();
    } else {
      this.toChecked();
    }
  }

  manageUnselectedIds(unselectedItems, e, id) {
    if (!e.target.checked && !unselectedItems.includes(id)) {
      unselectedItems.push(id);
    } else if (e.target.checked) {
      _.remove(unselectedItems, item => item === id);
    }
  }

  manageCheckboxBySelected(selectedItems, totalData) {
    let totalSelectedItems = selectedItems.length;
    if (totalSelectedItems === totalData) {
      this.toChecked();
    } else if (totalSelectedItems < totalData && totalSelectedItems > 0) {
      this.toIndeterminate();
    } else {
      this.toUnchecked();
    }
  }

  manageSelectedIds(selectedItems, e, id) {
    if (e.target.checked && !selectedItems.includes(id)) {
      selectedItems.push(id);
    } else if (!e.target.checked) {
      _.remove(selectedItems, item => item === id);
    }
  }

  manageSelectedItems(e, id): void {
    if (this.isAll) {
      this.manageUnselectedIds(this.unselectedIds, e, id);
      this.manageCheckboxByUnselected(this.unselectedIds, this.pageQuery.count);
    } else {
      this.manageSelectedIds(this.selectedIds, e, id);
      this.manageCheckboxBySelected(this.selectedIds, this.pageQuery.count);
    }
  }

  downloadExcel() {
    console.log(this.isAll, this.selectedIds, this.unselectedIds);
  }

  flushPreviousReport() {
    const props = Object.keys(this.show);
    props.forEach(prop => {
      this.show[prop] = false;
    });
    this.data.items = [];
    this.selectedIds = [];
    this.unselectedIds = [];
    this.isAll = false;
    this.periodHasError = false;
    this.toUnchecked();
  }

  fetchTicketStatuses() {
    this.data = this.reportService
      .getTicketStatuses(this.pageQuery, this.period[0], this.period[1])
      .subscribe(response => {
        this.data.items = response.items;
        this.pageQuery.count = response.count;
        this.show.ticketStatus = true;
        this.manageCheckedItemsOnPage();
      });
  }

  fetchUserFeedbacks() {
    this.data = this.reportService
      .getUserFeedbacks(this.pageQuery, this.period[0], this.period[1])
      .subscribe(response => {
        this.data.items = response.items;
        this.pageQuery.count = response.count;
        this.show.userFeedback = true;
        this.manageCheckedItemsOnPage();
      });
  }

  showReport(choice) {
    this.flushPreviousReport();
    if (this.period) {
      const startDate = this.period[0];
      const endDate = this.period[1];
      this.getPage();
      switch (choice) {
        case 0:
          this.fetchTicketStatuses();
          break;
        case 1:
          this.fetchUserFeedbacks();
          break;
      }
    } else {
      this.periodHasError = true;
    }
  }
}
