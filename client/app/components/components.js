import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Items from './items/items';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Login.name,
  Items.name
]);

export default componentModule;
