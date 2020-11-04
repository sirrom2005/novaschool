import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { AuthHttpInterceptorProvider } from './services/auth.http.Interceptor';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,

    LoginModule,
    DashboardModule
  ],
  providers: [AuthHttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
