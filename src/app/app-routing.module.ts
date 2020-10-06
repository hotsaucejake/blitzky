import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
// import { AdminComponent } from "./layouts/admin/admin.component";
// import { AuthComponent } from "./layouts/auth/auth.component";
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

// admin views
// import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
// import { SettingsComponent } from "./views/admin/settings/settings.component";
// import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
// import { LoginComponent } from "./views/auth/login/login.component";
// import { RegisterComponent } from "./views/auth/register/register.component";

// dashboard views
import { BitcloudsComponent } from './views/dashboard/bitclouds/bitclouds.component';
import { DashboardIndexComponent } from './views/dashboard/dashboard-index/dashboard-index.component';
import { LnpayComponent } from './views/dashboard/lnpay/lnpay.component';

// no layouts views
// import { IndexComponent } from "./views/index/index.component";
// import { LandingComponent } from "./views/landing/landing.component";
// import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
    // dashboard views
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'bitclouds', component: BitcloudsComponent },
            { path: 'index', component: DashboardIndexComponent },
            { path: 'lnpay', component: LnpayComponent },
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: '**', redirectTo: 'index', pathMatch: 'full' },
        ],
    },
    // admin views
    // {
    //   path: "admin",
    //   component: AdminComponent,
    //   children: [
    //     { path: "dashboard", component: DashboardComponent },
    //     { path: "settings", component: SettingsComponent },
    //     { path: "tables", component: TablesComponent },
    //     { path: "", redirectTo: "dashboard", pathMatch: "full" },
    //   ],
    // },
    // auth views
    // {
    //   path: "auth",
    //   component: AuthComponent,
    //   children: [
    //     { path: "login", component: LoginComponent },
    //     { path: "register", component: RegisterComponent },
    //     { path: "", redirectTo: "login", pathMatch: "full" },
    //   ],
    // },
    // no layout views
    // { path: "profile", component: ProfileComponent },
    // { path: "landing", component: LandingComponent },
    // { path: "", component: IndexComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
