import { Component, OnInit } from '@angular/core';
import { LnpayPreimage } from 'src/app/core/models/lnpay-preimage.interface';
import { LnpayService } from 'src/app/core/services/lnpay.service';

@Component({
    selector: 'app-views-dashboard-lnpay',
    templateUrl: './lnpay.component.html',
    providers: [LnpayService]
})
export class LnpayComponent implements OnInit {

    public color = 'light';

    public isLoading = false;

    public preimage: LnpayPreimage;

    constructor(private readonly lnpayService: LnpayService) { }

    public async ngOnInit(): Promise<void> {
        this.isLoading = true;
        const resp = await this.lnpayService.getSubdomain('testdomain');
        if (resp.type === 'data') {
            this.preimage = resp.data;
            console.log(this.preimage);
        }
        this.isLoading = false;
    }

}
