// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    // private http: HttpClient
  ) {
  }

  // getNews(): Observable<any> {
  // return this.http.post(`${environment.apiUrl}`, {});
  // }
  getNews() { }

  getNewsById(id: number) {

  }

  createNews(data: News) {

  }

  updateNews(id: number, data: News) {

  }

  deleteNews(id: number) {

  }

}
