import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main/home/main-dashboard/main-dashboard.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';

const routes: Routes = [
  // {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:MainDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
