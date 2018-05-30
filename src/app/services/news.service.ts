import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  News, Recipient,
  ApiResponse, ApiResponseQuery, PageQuery
} from '../models';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getNews(pageQuery: PageQuery, startDate: Date, endDate: Date): Observable<ApiResponseQuery<News>> {
    let queryString: string[] = new Array;
    // top
    queryString.push(`$top=${pageQuery.size}`);
    // skip
    queryString.push(`$skip=${(pageQuery.page - 1) * pageQuery.size}`);
    // orderby
    // queryString.push(`$orderby=${pageQuery.orderBy} ${pageQuery.sort}`);
    queryString.push(`$orderby=StartDate`);

    let filters: string[] = new Array;
    filters.push(`(substringof('${pageQuery.keyword}', Title) eq true)`);
    if (startDate)
      filters.push(`and (StartDate ge datetime'${startDate.toISOString()}')`);
    if (endDate)
      filters.push(`and (EndDate le datetime'${endDate.toISOString()}')`);

    queryString.push(`$filter=${filters.join(' ')}`);

    return this.http.post<ApiResponseQuery<News>>(`${environment.apiUrl}/api/alert/list?${queryString.join('&')}`, {});
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

  getRecipients(keyword: string = null): Observable<ApiResponseQuery<Recipient>> {
    let queryString: string[] = new Array;
    queryString.push(`$top=20`);
    // queryString.push(`$filter=substringof('${keyword}', Alias) eq true`);
    queryString.push(`keyword=${keyword}`);
    return this.http.post<ApiResponseQuery<Recipient>>(`${environment.apiUrl}/api/alert/recipients?${queryString.join('&')}`, {});
  }
}
