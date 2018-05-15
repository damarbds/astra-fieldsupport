export class ApiResponse<T> {
    succeed: boolean;
    message: string;
    data: T;
}