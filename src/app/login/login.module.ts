import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AuthServiceConfig } from 'angularx-social-login';
import { SocialLoginModule } from 'angularx-social-login';
import { config } from './config';

@NgModule({
  declarations: [LoginComponent, UserDetailsComponent, SignInComponent, SignOutComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: config
  }],
  exports: [LoginComponent]
})
export class LoginModule { }
