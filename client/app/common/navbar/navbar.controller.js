class NavbarController {
  constructor(AuthFirebaseUserService, pubSub, $rootScope) {
    "ngInject";
    this.name = 'navbar';
    this.authService = AuthFirebaseUserService;
    this.authData = {isLogged: this.authService.isAuthenticated()};

    pubSub.subscribe('auth-data', (msg, msgValue) => {
      this.authData.isLogged = msgValue;
      setTimeout(() => { $rootScope.$apply() }, 100);
    })
  }
}

export default NavbarController;
