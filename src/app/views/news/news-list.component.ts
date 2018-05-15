import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {

  news: News[];

  currentPage: number = 1;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    // this.newsService.getNews()
    //   .subscribe(response => {
    //     this.news = response.data;
    //   });

    this.news = [];

    let x = new News();
    x.id = 1;
    x.title = 'test';

    this.news.push(x);
    this.news.push(x);
    this.news.push(x);
    this.news.push(x);
    this.news.push(x);
  }

  pageChanged(event: any) {
    let nextPage = event.page;
    let itemsPerPage = event.itemsPerPage;

    
  }
  

}
