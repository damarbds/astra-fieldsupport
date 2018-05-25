import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as moment from "moment";
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

  convertDate(date) {
    return moment.utc(date).format("YYYY-MM-DDTHH:mm:ss");
  }

  getTicketStatuses(
    pageQuery: PageQuery,
    startDate: Date,
    endDate: Date
  ): Observable<ApiResponseQuery<TicketStatusReport>> {
    let queryString: string[] = new Array();

    queryString.push(`$top=${pageQuery.size}`);
    queryString.push(`$skip=${(pageQuery.page - 1) * pageQuery.size}`);

    const formattedStartDate = this.convertDate(startDate);
    const formattedEndDate = this.convertDate(endDate);
    queryString.push(
      `$filter=TicketCreatedDate ge datetime'${formattedStartDate}' and TicketCreatedDate le datetime'${formattedEndDate}'`
    );

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

    const formattedStartDate = this.convertDate(startDate);
    const formattedEndDate = this.convertDate(endDate);
    queryString.push(
      `$filter=TicketCreatedDate ge datetime'${formattedStartDate}' and TicketCreatedDate le datetime'${formattedEndDate}'`
    );

    return this.http.post<ApiResponseQuery<UserFeedbackReport>>(
      `${environment.apiUrl}/api/report/feedback-user?${queryString.join("&")}`,
      {}
    );
  }
}
