import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemComponent from './item.component';

let itemModule = angular.module('item', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('item', {
      url: '/item',
      template: '<item></item>'
    });
})

.component('item', itemComponent);

export default itemModule;
