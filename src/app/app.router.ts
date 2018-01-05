
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitComponent } from './visit/visit.component'

const router: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomePageComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', component: DashboardComponent },
      { path: 'visit', component: VisitComponent },
      
    ]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
