import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

import { News, NewsRecipients } from '../../models/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  id: number;
  news: News;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.news = new News();

    this.news.title = 'Lorem ipsum title';
    this.news.startDate = new Date();
    this.news.endDate = new Date();
    this.news.content = 'Lorem ipsum';
    this.news.displayedRecipients = 'IT Group, Rahmat Hidayat';

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

}
