import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RecomService } from './services/recom.service';


@NgModule({
  declarations: [
    AppComponent,
    MyRecommendationsComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    RecomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
