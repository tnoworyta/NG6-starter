import angular from 'angular';

class MyService {
  constructor() {

  }

  sayHello() {
    console.log('hello');
  }
}
//app.service('MyService', MyService);
//angular.module('fbase', []).service('MyService', MyService);

//let fbaseModule = angular.module('fbase', []).service('MyService', MyService);

let fbaseModule = angular.module('fbase', [

]).service('MyService', MyService)

export default fbaseModule;
