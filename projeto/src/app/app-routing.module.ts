import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterComponent } from './dashboard-page/register/register-component.component';
import { RegistryComponent } from './dashboard-page/registry/registry-component.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
  { path: "login", component: LoginPageComponent},

  { path: "dashboard", component: DashboardPageComponent, children: [
    { path: '', redirectTo: 'registry', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent},
    { path: 'registry', component: RegistryComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
