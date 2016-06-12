import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';
//import MyService from '../my.service'

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  providers: ['$firebaseAuth', 'MyService']
};

export default navbarComponent;
