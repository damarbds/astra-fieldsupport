export class ApiResponse<T> {
    succeed: boolean;
    message: string;
    data: T;
}

export class ApiResponseQuery<T> {
    succeed: boolean;
    message: string;
    data: QueryResult<T>;
}

export class QueryResult<T> {
    count: number;
    items: T[];
}