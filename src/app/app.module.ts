import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';

import { routes } from './app.router';
import { VisitComponent } from './visit/visit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainHeaderComponent,
    MainNavComponent,
    MainFooterComponent,
    DashboardComponent,
    HomePageComponent,
    VisitComponent,
    
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
