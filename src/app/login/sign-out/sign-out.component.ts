import { Component } from '@angular/core';
import {AuthService} from 'angularx-social-login';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {

  constructor(private authService: AuthService) { }

  signOut(): void {
    this.authService.signOut();
  }
}
