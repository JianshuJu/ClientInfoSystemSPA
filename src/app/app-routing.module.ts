import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { InteractionClientComponent } from './interaction/interaction-client/interaction-client.component';
import { InteractionDetailsComponent } from './interaction/interaction-details/interaction-details.component';
import { InteractionEmployeeComponent } from './interaction/interaction-employee/interaction-employee.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "interaction/:id", component: InteractionDetailsComponent },
  { path: "client/:id", component: InteractionClientComponent },
  { path: "employee/:id", component: InteractionEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
