import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { News, Recipient } from '../models/news';
import { ApiResponse, ApiResponseQuery, QueryResult } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getNews(): Observable<ApiResponseQuery<News>> {
    // return this.http.post<ApiResponseQuery<News>>(`${environment.apiUrl}/api/alert/list`, {});

    let result: ApiResponseQuery<News> = new ApiResponseQuery<News>();
    result.succeed = true;
    result.message = '';
    result.data = new QueryResult<News>();
    result.data.count = 5;
    result.data.items = new Array<News>();
    result.data.items.push({ id: 1, title: 'Lorem ipsum', startDate: new Date(), endDate: new Date(), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', recipients: [], displayedRecipients: '' });
    result.data.items.push({ id: 2, title: 'ut aliquit', startDate: new Date(), endDate: new Date(), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', recipients: [], displayedRecipients: '' });
    result.data.items.push({ id: 3, title: 'inciduant', startDate: new Date(), endDate: new Date(), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', recipients: [], displayedRecipients: '' });

    return of(result);
  }

  getNewsById(id: number): Observable<ApiResponse<News>> {
    return this.http.post<ApiResponse<News>>(`${environment.apiUrl}/api/alert/${id}`, {});
  }

  createNews(data: News) {
    return this.http.post<ApiResponse<News>>(`${environment.apiUrl}/api/alert/create`, data);
  }

  updateNews(id: number, data: News) {
    return this.http.post<ApiResponse<News>>(`${environment.apiUrl}/api/alert/${id}/update`, data);
  }

  deleteNews(id: number) {
    return this.http.post<ApiResponse<News>>(`${environment.apiUrl}/api/alert/${id}/delete`, {});
  }

  getRecipients(keyword: string = null) {
    // return this.http.post<ApiResponseQuery<Recipient>>(`${environment.apiUrl}/api/recipient/list`, {});
    let result: ApiResponseQuery<Recipient> = new ApiResponseQuery<Recipient>();
    result.succeed = true;
    result.message = '';
    result.data = new QueryResult<Recipient>();
    result.data.count = 5;
    result.data.items = new Array<Recipient>();
    result.data.items.push({ alias: 'Kuping', id: 1, type: 'GROUP' });
    result.data.items.push({ alias: 'Setip', id: 2, type: 'INDIVIDUAL' });
    result.data.items.push({ alias: 'Kotak', id: 1, type: 'GROUP' });
    result.data.items.push({ alias: 'Pensil', id: 1, type: 'INDIVIDUAL' });
    result.data.items.push({ alias: 'Rambut', id: 1, type: 'GROUP' });

    return of(result);
  }

}
