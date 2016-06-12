import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import MyService from './my.service'

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  MyService.name
]);

export default commonModule;
