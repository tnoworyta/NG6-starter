import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  providers: ['AuthFirebaseUserService', 'pubSub']
};

export default navbarComponent;
