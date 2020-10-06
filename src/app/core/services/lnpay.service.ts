import { Injectable } from '@angular/core';
import { LnpayPreimage } from '../models/lnpay-preimage.interface';
import { BaseService } from './base.service';
import { ServiceResponse } from './models/service-response';

@Injectable({
    providedIn: 'root'
})
export class LnpayService extends BaseService {

    private baseUrl = 'https://lnpay.xyz';

    public getSubdomain(subdomain: string, amount: number = 10000): Promise<ServiceResponse<LnpayPreimage>> {
        return this.getAsync(`${this.baseUrl}/buy/${subdomain}?amount=${amount}`);
    }
}
