import template from './items.html';
import controller from './items.controller';
import './items.styl';
import 'firebase';

let itemsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  providers: []
};

export default itemsComponent;
