import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logoutComponent from './logout.component';

let logoutModule = angular.module('logout', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('logout', {
      url: '/logout',
      template: '<logout></logout>'
    });
})

.component('logout', logoutComponent);

export default logoutModule;
