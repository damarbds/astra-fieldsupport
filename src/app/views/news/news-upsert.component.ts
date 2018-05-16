import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-news-upsert',
  templateUrl: './news-upsert.component.html'
})
export class NewsUpsertComponent implements OnInit {

  id: number;
  news: News;

  checkSendToAll: boolean;
  checkStartDateToday: boolean;
  checkEndDateNever: boolean;

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
      this.news.recipients = '';
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

}
