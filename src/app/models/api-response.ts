export class ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export class ApiResponseQuery<T> {
    success: boolean;
    message: string;
    items: Array<T>;
    nextPageLink: string;
    count: number;
}

export class PageQuery {
    constructor() {
        this.page = 1;
        this.count = 1;
        this.size = 10;
        this.keyword = '';
        this.orderBy = '';
        this.sort = 'desc';
    }

    page: number;
    count: number;
    size: number;
    keyword: string;
    orderBy: string;
    sort: string;
}