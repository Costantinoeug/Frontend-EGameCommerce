import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config : {
        url: 'http://localhost:8080/auth',
        realm: 'EGCRealm',
        clientId: 'egc-frontend'
      },
      loadUserProfileAtStartUp: true,
      initOptions: {
          onLoad: 'check-sso',
          // onLoad: 'login-required',
          checkLoginIframe: false
      },
      bearerExcludedUrls: []
    };

    return () => keycloak.init(options);
}
