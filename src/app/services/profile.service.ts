import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponseQuery, FieldSupport, PageQuery } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getFieldSupports(pageQuery: PageQuery): Observable<ApiResponseQuery<FieldSupport>> {
    let queryString: string[] = new Array;
    // top
    queryString.push(`$top=${pageQuery.size}`);
    // skip
    queryString.push(`$skip=${(pageQuery.page - 1) * pageQuery.size}`);

    return this.http.post<ApiResponseQuery<FieldSupport>>(`${environment.apiUrl}/api/profiles/list/fs?${queryString.join('&')}`, {});
  }
}

