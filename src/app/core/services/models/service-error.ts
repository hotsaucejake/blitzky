import { ErrorResponse } from './error-response';

export interface ServiceError {
    type: 'error';
    statusCode: number;
    message: string;
    body: string;
    response: ErrorResponse;
}
