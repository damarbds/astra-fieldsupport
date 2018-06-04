import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MasterFeedbackService {

  constructor(
    private http: HttpClient
  ) {

  }
  
  defaultUrl: string = `${environment.apiUrl}`;

  getApp() {
    return this.http.post(this.defaultUrl + 'api/application/list', {})
  }

  getFeedbackList() {
    return this.http.post(this.defaultUrl + 'api/feedback/list', {})
  }
  edit(id, data) {
    return this.http.post(this.defaultUrl + 'api/feedback/' + id, data)
  }
  create(data) {
    return this.http.post(this.defaultUrl + 'api/feedback/create', data)
  }
}
