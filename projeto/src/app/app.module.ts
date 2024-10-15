import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ToolbarComponent } from '../shared-components/toolbar/toolbar.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
