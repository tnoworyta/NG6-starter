import angular from 'angular';

class MyService {
  constructor($firebaseAuth) {
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
    this.authData = this.firebaseObj.getAuth();
    console.log(this.authData)
  }

  sayHello() {
    return this.authData;
  }
}
//app.service('MyService', MyService);
//angular.module('fbase', []).service('MyService', MyService);

//let fbaseModule = angular.module('fbase', []).service('MyService', MyService);

let fbaseModule = angular.module('fbase', []).service('MyService', ['$firebaseAuth', MyService])

export default fbaseModule;
