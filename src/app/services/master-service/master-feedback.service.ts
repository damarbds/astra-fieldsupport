import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http ,RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MasterFeedbackService {

  constructor(private http : HttpClient) { }
  defaultUrl : string = 'http://11.11.1.42:10010/'

  getApp(){
    return this.http.post(this.defaultUrl+'api/application/list',{})
  }
  
  getFeedbackList(){
    return this.http.post(this.defaultUrl+'api/feedback/list',{})
  }
  edit(id,data){
    return this.http.post(this.defaultUrl+'api/feedback/'+id,data)
  }
  create(data){
    return this.http.post(this.defaultUrl+'api/feedback/create',data)
  }
}
