import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services';
import { News, Recipient } from '../../models';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-news-upsert',
  templateUrl: './news-upsert.component.html'
})
export class NewsUpsertComponent implements OnInit {

  id: number;
  news: News;

  // ini mesti diganti pake lazyloading ya nanti
  recipients: Recipient[];
  // recipients: Recipient[] = [
  //   { id: 1, alias: 'IT Department', type: 'GROUP' },
  //   { id: 2, alias: 'HR Department', type: 'GROUP' },
  //   { id: 3, alias: 'RND Department', type: 'GROUP' },
  //   { id: 4, alias: 'Rahmat', type: 'INDIVIDUAL' },
  // ];

  checkSendToAll: boolean;
  checkStartDateToday: boolean;
  checkEndDateNever: boolean;

  loadingGetRecipients: boolean = false;
  recipientsTypeahead: Subject<string> = new Subject<string>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private newsService: NewsService
  ) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.news = new News();

    if (this.id > 0) {
      this.getNewsById(this.id);
    }

    this.getRecipients();
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

  save(news) {
    if (news.id) {
      this.newsService.updateNews(news.id, news)
        .subscribe(response => {
          this.toastrService.success(`Data has been updated`);
          this.router.navigate(['/news/list']);

        });
    }
    else {
      this.newsService.createNews(news)
        .subscribe(response => {
          this.toastrService.success(`Data has been created`);
          this.router.navigate(['/news/list']);

        });
    }
  }

  getRecipients() {
    this.recipientsTypeahead.pipe(
      tap(() => this.loadingGetRecipients = true),
      distinctUntilChanged(),
      debounceTime(200),
      switchMap(term => this.newsService.getRecipients(term))
    ).subscribe(response => {
      this.recipients = response.items;
      this.loadingGetRecipients = false;
    }, () => {
      this.loadingGetRecipients = false;
      this.recipients = [];
    });
  }
}
