import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News, Recipient } from '../../models';

@Component({
  selector: 'app-news-upsert',
  templateUrl: './news-upsert.component.html'
})
export class NewsUpsertComponent implements OnInit {

  id: number;
  news: News;

  // ini mesti diganti pake lazyloading ya nanti
  recipients: Recipient[] = [
    { id: 1, alias: 'IT Department', type: 'GROUP' },
    { id: 2, alias: 'HR Department', type: 'GROUP' },
    { id: 3, alias: 'RND Department', type: 'GROUP' },
    { id: 4, alias: 'Rahmat', type: 'INDIVIDUAL' },
  ];

  checkSendToAll: boolean;
  checkStartDateToday: boolean;
  checkEndDateNever: boolean;

  recipientLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.news = new News();

    if (this.id > 0) {
      console.log(`Edit Mode`);

      this.getNewsById(this.id);
    }

    // this.getRecipients();
  }

  getNewsById(id: number) {
    this.newsService.getNewsById(id)
      .subscribe(response => {
        this.news = response.data;
      });
  }

  back() {
    this.router.navigate(['/news/list']);
  }

  setSendToAllRecipients(event) {
    if (event.target.checked) {
      this.news.recipients = [];
    }
  }

  setStartDateToday(event) {
    if (event.target.checked) {
      this.news.startDate = new Date();
    }
  }

  clearEndDate(event) {
    if (event.target.checked) {
      this.news.endDate = null;
    }
  }

  recipientsOnChange(event) {
    this.news.recipients = event;
  }

  // getRecipients() {
  //   this.newsService.getRecipients()
  //     .subscribe(response => {
  //       this.recipients = response.data.items;
  //     });
  // }

}
