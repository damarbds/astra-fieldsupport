import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import {
  TicketStatusReport,
  UserFeedbackReport,
  ApiResponse,
  ApiResponseQuery,
  PageQuery
} from "../models";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getTicketStatuses(
    pageQuery: PageQuery,
    startDate: Date,
    endDate: Date
  ): Observable<ApiResponseQuery<TicketStatusReport>> {
    let queryString: string[] = new Array();

    queryString.push(`$top=${pageQuery.size}`);
    queryString.push(`$skip=${(pageQuery.page - 1) * pageQuery.size}`);

    return this.http.post<ApiResponseQuery<TicketStatusReport>>(
      `${environment.apiUrl}/api/report/ticket-status?${queryString.join("&")}`,
      {}
    );
  }

  getUserFeedbacks(
    pageQuery: PageQuery,
    startDate: Date,
    endDate: Date
  ): Observable<ApiResponseQuery<UserFeedbackReport>> {
    let queryString: string[] = new Array();

    queryString.push(`$top=${pageQuery.size}`);
    queryString.push(`$skip=${(pageQuery.page - 1) * pageQuery.size}`);

    return this.http.post<ApiResponseQuery<UserFeedbackReport>>(
      `${environment.apiUrl}/api/report/feedback-user?${queryString.join("&")}`,
      {}
    );
  }
}
