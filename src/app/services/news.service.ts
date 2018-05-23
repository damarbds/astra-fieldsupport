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

  getRecipients(keyword: string = null) {
    // return this.http.post<ApiResponseQuery<Recipient>>(`${environment.apiUrl}/api/recipient/list`, {});
    let result: ApiResponseQuery<Recipient> = new ApiResponseQuery<Recipient>();
    // result.succeed = true;
    // result.message = '';
    // result.data = new QueryResult<Recipient>();
    // result.data.count = 5;
    // result.data.items = new Array<Recipient>();
    // result.data.items.push({ alias: 'Kuping', id: 1, type: 'GROUP' });
    // result.data.items.push({ alias: 'Setip', id: 2, type: 'INDIVIDUAL' });
    // result.data.items.push({ alias: 'Kotak', id: 1, type: 'GROUP' });
    // result.data.items.push({ alias: 'Pensil', id: 1, type: 'INDIVIDUAL' });
    // result.data.items.push({ alias: 'Rambut', id: 1, type: 'GROUP' });

    return of(result);
  }

}
