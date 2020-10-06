import { LnpaySuccessAction } from './lnpay-success-action.interface';

export interface LnpayPreimage {
    disposable: boolean;
    pr: string;
    routes: [];
    successAction: LnpaySuccessAction;
}
