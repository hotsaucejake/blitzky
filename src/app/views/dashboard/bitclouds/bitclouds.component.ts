import { Component, OnInit } from '@angular/core';
import { BitcloudsService } from 'src/app/core/services/bitclouds.service';

@Component({
    selector: 'app-views-dashboard-bitclouds',
    templateUrl: './bitclouds.component.html',
    providers: [BitcloudsService]
})
export class BitcloudsComponent implements OnInit {

    public color = 'light';

    public isLoading = false;
    public images: [];

    constructor(private readonly bitcloudsService: BitcloudsService) { }

    public async ngOnInit(): Promise<void> {
        this.isLoading = true;
        // console.log('here');
        // const response = await this.bitcloudsService.getImages();
        // console.log(response);

        this.isLoading = false;
  }

}
