import template from './logout.html';
import controller from './logout.controller';
import './logout.styl';

let logoutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  providers: ['AuthFirebaseUserService', 'pubSub']
};

export default logoutComponent;
