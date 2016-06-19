import angular from 'angular';

class AuthFirebaseUserService {
  constructor($firebaseAuth) {
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
    this.authData = this.firebaseObj.getAuth();
    console.log('AuthFirebaseUserService', this.authData);
  }

  login(email, password, pubSub) {
    this.firebaseObj.authWithPassword({
      "email": email,
      "password": password
    }, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        pubSub.publish('auth-data', 'isLogged', true);
        //authData = this.firebaseObj.getAuth();
        //console.log(authData)
      }
    });
  }

  logout(pubSub) {
    this.firebaseObj.unauth();
    pubSub.publish('auth-data', 'isLogged', false);
  }

  isAuthenticated() {
    //console.log(':: isAuthenticated called!');
    return !!this.authData;
  }
}
//app.service('MyService', MyService);
//angular.module('fbase', []).service('MyService', MyService);

//let fbaseModule = angular.module('fbase', []).service('MyService', MyService);

let fbaseModule = angular.module('fbase', []).service('AuthFirebaseUserService', ['$firebaseAuth', AuthFirebaseUserService])

export default fbaseModule;
