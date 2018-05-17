export class News {
    id: number;
    displayedRecipients: string;
    recipients: Recipient[];
    title: string;
    startDate: Date;
    endDate: Date;
    content: string;
}

export class Recipient {
    type: string;
    id: number;
    alias: string;
}