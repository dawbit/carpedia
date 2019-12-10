// via https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { DefaultGuard } from './guards/default.quard';
import { TokenInterceptor } from './token.interceptor';

import { UserLoginComponent } from '../user/user-login/user-login.component';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    DefaultGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AuthModule { }
