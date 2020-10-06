import { Injectable } from '@angular/core';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ErrorResponse } from './models/error-response';
import { ServiceData } from './models/service-data';
import { ServiceError } from './models/service-error';
import { ServiceResponse } from './models/service-response';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService {

    constructor() { }


    private createError<T>(error: AxiosError): ServiceError {

        const retError = {
            type: 'error'
        } as ServiceError;

        const errorResponse = error.response.data as ErrorResponse;

        retError.response = {} as ErrorResponse;

        if (!!error.response) {
            retError.statusCode = error.response.status;
            retError.message = error.response.statusText;
            retError.body = error.response.data.toString();

            if (retError.statusCode === 401) {
                // do something
            } else if (retError.statusCode === 403) {
                // do something
            }
        }

        return retError;
    }


    private createData<T>(data: T): ServiceData<T> {
        return {
            type: 'data',
            data
        } as ServiceData<T>;
    }


    private createRequestConfig<T>(): AxiosRequestConfig {
        const config = {} as AxiosRequestConfig;

        config.transformResponse = (data) => {
            return this.deserialize(data);
        };

        return config;
    }


    private deserialize<T>(data: string): T {
        return JSON.parse(data, this.reviveDateTime) as T;
    }


    private reviveDateTime(key: any, value: any): any {
        if (typeof value === 'string') {
            const a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(?:([\+-])(\d{2})\:(\d{2}))?Z?$/.exec(value);
            if (a) {
                const utcMilliseconds = Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]);
                return new Date(utcMilliseconds);
            }
        }
        return value;
    }


    protected async postAsync<T>(endpoint: string, body?: {}): Promise<ServiceResponse<T>> {
        let retResp = {} as ServiceResponse<T>;

        try {
            const resp = await axios.post<T>(
                endpoint,
                body,
                this.createRequestConfig()
            );
            retResp = this.createData(resp.data);
        } catch (e) {
            retResp = this.createError<T>(e as AxiosError<T>);
        }

        return retResp;
    }


    protected async getAsync<T>(endpoint: string): Promise<ServiceResponse<T>> {
        let retResp = {} as ServiceResponse<T>;

        try {
            const resp = await axios.get<T>(
                endpoint,
                this.createRequestConfig()
            );
            retResp = this.createData(resp.data);
        } catch (e) {
            retResp = this.createError<T>(e);
        }

        return retResp;
    }


    protected async putAsync<T>(endpoint: string, body?: {}): Promise<ServiceResponse<T>> {
        let retResp = {} as ServiceResponse<T>;

        try {
            const resp = await axios.put<T>(
                endpoint,
                body,
                this.createRequestConfig()
            );
            retResp = this.createData(resp.data);
        } catch (e) {
            retResp = this.createError<T>(e as AxiosError<T>);
        }

        return retResp;
    }


    protected async deleteAsync<T>(endpoint: string): Promise<ServiceResponse<T>> {
        let retResp = {} as ServiceResponse<T>;

        try {
            const resp = await axios.delete<T>(
                endpoint,
                this.createRequestConfig()
            );
            retResp = this.createData(resp.data);
        } catch (e) {
            retResp = this.createError<T>(e as AxiosError<T>);
        }

        return retResp;
    }
}
