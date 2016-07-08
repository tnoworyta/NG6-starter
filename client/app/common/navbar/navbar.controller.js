class NavbarController {
  constructor(AuthFirebaseUserService, pubSub, $rootScope) {
    "ngInject";
    this.name = 'navbar';
    this.authService = AuthFirebaseUserService;
    this.authData = {isLogged: this.authService.isAuthenticated()};
    console.log('auth data: ', this.authData);

    pubSub.subscribe('auth-data', (msg, msgValue) => {
      this.authData.isLogged = msgValue;
      console.log('reloading the data', msg, msgValue);
      setTimeout(() => { $rootScope.$apply() }, 100);
    })
  }
}

export default NavbarController;
