import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTrackerComponent } from './main/home/expense-tracker/expense-tracker.component';
import { MainDashboardComponent } from './main/home/main-dashboard/main-dashboard.component';
import { NotePadComponent } from './main/home/note-pad/note-pad.component';
import { UserManagementComponent } from './main/home/user-management/user-management.component';
import { EmailVerifyComponent } from './main/login/email-verify/email-verify.component';
import { ForgetPasswordComponent } from './main/login/forget-password/forget-password.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:MainDashboardComponent},
  {path:"forgot",component:ForgetPasswordComponent},
  {path:"verify-email",component:EmailVerifyComponent},
  {path:"user",component:UserManagementComponent},
  {path:"expense",component:ExpenseTrackerComponent},
  {path:"note",component:NotePadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
