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