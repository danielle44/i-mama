import {AuthServiceConfig, FacebookLoginProvider} from 'angularx-social-login';

export function config() {
  return new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2304318626515828')
    }
  ]);
}
