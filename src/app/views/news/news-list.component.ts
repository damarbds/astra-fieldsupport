import { Component, OnInit } from '@angular/core';
import { News, Recipient, PageQuery } from '../../models';
import { NewsService } from '../../services/news.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  // for filter purpose
  keyword: string;
  dateRange: any[] = [];

  newsList: News[];
  pageQuery: PageQuery = new PageQuery();

  selectedDateRange: any[] = [];

  constructor(
    private newsService: NewsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getNews(this.pageQuery);
  }

  pageChanged(event: any) {
    let startDate: Date;
    let endDate: Date;

    if (this.selectedDateRange.length > 0) {
      startDate = this.selectedDateRange[0];
      endDate = this.selectedDateRange[1];
    }

    this.getNews(this.pageQuery, this.selectedDateRange);
  }

  searchNews(keyword: string, dateRange) {
    this.pageQuery.page = 1;
    this.pageQuery.keyword = keyword;

    this.selectedDateRange = dateRange;

    this.getNews(this.pageQuery, this.selectedDateRange);
  }
  
  getNews(pageQuery: PageQuery, dateRange?) {
    let startDate: Date;
    let endDate: Date;

    if (dateRange && dateRange.length > 0) {
      startDate = dateRange[0];
      endDate = dateRange[1];
    }

    this.newsService.getNews(pageQuery, startDate, endDate)
      .subscribe(response => {
        this.newsList = response.items;
        this.pageQuery.count = response.count;
      });
  }

  confirmDelete(item) {
    if (confirm(`Are you sure want to delete this data?`)) {
      this.newsService.deleteNews(item.id)
        .subscribe(response => {
          this.toastrService.success(`Data has been deleted`);

          this.getNews(this.pageQuery, this.selectedDateRange);
        })
    }
  }
}
