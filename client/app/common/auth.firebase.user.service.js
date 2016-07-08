import angular from 'angular';

class AuthFirebaseUserService {
  constructor($firebaseAuth) {
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
    this.authData = this.firebaseObj.getAuth();
  }

  login(email, password, pubSub) {
    this.firebaseObj.authWithPassword({
      "email": email,
      "password": password
    }, (error, authData) => {
      if (!error) {
        pubSub.publish('auth-data', 'isLogged', true);
        this.authData = this.firebaseObj.getAuth();
      }
    });
  }

  logout(pubSub) {
    this.firebaseObj.unauth();
    this.authData = null;
    pubSub.publish('auth-data', 'isLogged', false);
  }

  isAuthenticated() {
    console.log('auth data from the service: ', this.authData);
    return !!this.authData;
  }
}

let fbaseModule = angular.module('fbase', []).service('AuthFirebaseUserService', ['$firebaseAuth', AuthFirebaseUserService]);

export default fbaseModule;
