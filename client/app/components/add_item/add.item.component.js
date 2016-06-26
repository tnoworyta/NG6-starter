import template from './add.item.html';
import controller from './add.item.controller';
import './add.item.styl';

let addItemComponent = {
  restrict: 'E',
  bindings: { items: '=' },
  template,
  controller,
  controllerAs: 'vm'
};

export default addItemComponent;
