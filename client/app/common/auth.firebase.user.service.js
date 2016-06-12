import angular from 'angular';

class AuthFirebaseUserService {
  constructor($firebaseAuth) {
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
    this.authData = this.firebaseObj.getAuth();
    console.log('AuthFirebaseUserService', this.authData)
  }

  login(email, password) {
    this.firebaseObj.authWithPassword({
      "email": email,
      "password": password
    }, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        //authData = this.firebaseObj.getAuth();
        //console.log(authData)
      }
    });
  }

  logout() {
    this.firebaseObj.unauth();
  }

  isAuthenticated() {
    console.log(':: isAuthenticated called!');
    return !!this.authData;
  }
}
//app.service('MyService', MyService);
//angular.module('fbase', []).service('MyService', MyService);

//let fbaseModule = angular.module('fbase', []).service('MyService', MyService);

let fbaseModule = angular.module('fbase', []).service('AuthFirebaseUserService', ['$firebaseAuth', AuthFirebaseUserService])

export default fbaseModule;
