import { Component, OnInit } from '@angular/core';
import { News, NewsRecipients } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {

  filter: any = { keyword: '', daterange: [] };

  currentPage: number = 1;
  totalPage: number;

  news: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews(this.filter);
  }

  pageChanged(event: any) {
    let nextPage = event.page;
    let itemsPerPage = event.itemsPerPage;
  }

  searchNews() {
    // di sini set paging ke 1

    this.getNews(this.filter);
  }

  getNews(filter: any) {
    let keyword = filter.keyword;

    if (filter.daterange.length > 0) {
      let startDate = filter.daterange[0];
      let endDate = filter.daterange[1];
    }

    this.newsService.getNews()
      .subscribe(response => {
        let result = response.data;

        this.totalPage = result.count;
        this.news = result.items;
      });
  }
}
