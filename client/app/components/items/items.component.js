import template from './items.html';
import controller from './items.controller';
import './items.styl';

let itemsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  providers: ['$firebaseArray']
};

export default itemsComponent;
