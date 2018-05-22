export class TicketStatusReport {
  id: number;
  SLA: string;
  expectedTime: Date;
  ticketNo: number;
  ticketCreatedDate: Date;
  requester: string;
  group: string;
  category: string;
  subCategory: string;
  description: string;
  PICName: string;
  status: string;
}

export class UserFeedbackReport {
  id: number;
  rating: number;
  additionalFeedback: string;
  comment: string;
  ticketNo: number;
  ticketCreatedDate: Date;
  requester: string;
  group: string;
  category: string;
  subCategory: string;
  description: string;
  PICName: string;
}
