import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-components-footer-dashboard',
    templateUrl: './footer-dashboard.component.html'
})
export class FooterDashboardComponent implements OnInit {

    public date = new Date().getFullYear();

    constructor() { }

    ngOnInit(): void {
    }

}
