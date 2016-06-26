import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import AuthFirebaseUserService from './auth.firebase.user.service'

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  AuthFirebaseUserService.name
]);

export default commonModule;
