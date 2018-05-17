import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {

  currentPage: number = 1;
  totalPage: number;

  news: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(response => {
        let result = response.data;

        this.totalPage = result.count;
        this.news = result.items;
      });
  }

  pageChanged(event: any) {
    let nextPage = event.page;
    let itemsPerPage = event.itemsPerPage;
  }


}
