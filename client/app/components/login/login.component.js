import template from './login.html';
import controller from './login.controller';
import './login.styl';
import 'firebase';

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  providers: ['$firebaseAuth']
};

export default loginComponent;
