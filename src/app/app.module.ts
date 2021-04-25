import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InteractionDetailsComponent } from './interaction/interaction-details/interaction-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCardComponent } from './shared/components/client-card/client-card.component';
import { EmployeeCardComponent } from './shared/components/employee-card/employee-card.component';
import { InteractionEmployeeComponent } from './interaction/interaction-employee/interaction-employee.component';
import { InteractionClientComponent } from './interaction/interaction-client/interaction-client.component';
import { InteractionCardComponent } from './shared/components/interaction-card/interaction-card.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InteractionDetailsComponent,
    ClientCardComponent,
    EmployeeCardComponent,
    InteractionEmployeeComponent,
    InteractionClientComponent,
    InteractionCardComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
