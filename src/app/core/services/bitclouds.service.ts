import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ServiceResponse } from './models/service-response';

@Injectable({
    providedIn: 'root'
})
export class BitcloudsService {

    private baseUrl = 'https://bitclouds.sh';
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    // public async getImages(): Promise<Observable<any>> {
    //     const resp = await this.http.get(`${this.baseUrl}/images`, {
    //         headers: {

    //         }
    //     });
    //     console.log(resp);
    //     return resp;
    // }

}
