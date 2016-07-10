import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addItemComponent from './add.item.component';

let addItemModule = angular.module('addItem', [
  uiRouter
])

.component('addItem', addItemComponent);

export default addItemModule;
