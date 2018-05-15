import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { News } from '../models/news';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getNews(): Observable<ApiResponse<News[]>> {
    return this.http.post<ApiResponse<News[]>>(`${environment.apiUrl}/api/alert/list`, {});
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

}
