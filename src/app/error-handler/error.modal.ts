import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface ErrorModal {
    user_name: string,
    error_message: string,
    error_stack: string,
    date: string
}