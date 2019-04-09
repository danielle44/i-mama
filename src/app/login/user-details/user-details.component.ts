import {Component, Input} from '@angular/core';
import {SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  @Input() user: SocialUser;
}
