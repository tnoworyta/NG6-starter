import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemsComponent from './items.component';

let itemsModule = angular.module('items', [
  uiRouter,
  'firebase'
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('items', {
      url: '/items',
      template: '<items></items>'
    });
})

.component('items', itemsComponent);

export default itemsModule;
