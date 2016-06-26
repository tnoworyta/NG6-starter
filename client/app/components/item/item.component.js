import template from './item.html';
import controller from './item.controller';
import './item.styl';

let itemComponent = {
  restrict: 'E',
  bindings: { item: '=', items: '=' },
  template,
  controller,
  controllerAs: 'vm'
};

export default itemComponent;
