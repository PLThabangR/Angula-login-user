import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupUsersComponent } from './components/signup-users/signup-users.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomePageComponent } from './components/home-page/home-page.component'
@NgModule({
  declarations: [
    AppComponent,
    SignupUsersComponent,
    LoginUserComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
