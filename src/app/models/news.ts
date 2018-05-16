export class News {
    id: number;
    displayedRecipients: string;
    recipients: NewsRecipients[];
    title: string;
    startDate: Date;
    endDate: Date;
    content: string;
}

export class NewsRecipients {
    type: string;
    id: number;
    alias: string;
}