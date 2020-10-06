import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-views-dashboard-lnpay',
    templateUrl: './lnpay.component.html'
})
export class LnpayComponent implements OnInit {

    public color = 'light';

    public isLoading = false;

    constructor() { }

    ngOnInit(): void {
    }

}
