import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {

  news: News[];

  query: any;

  constructor(
    private newsService: NewsService
  ) {

  }

  ngOnInit() {
    // this.news = this.newsService.getNews();
  }

}
