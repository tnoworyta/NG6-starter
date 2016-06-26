class NavbarController {
  constructor(AuthFirebaseUserService, pubSub) {
    "ngInject";
    this.name = 'navbar';
    this.authService = AuthFirebaseUserService;
    this.authData = {isLogged: this.authService.isAuthenticated()};
    pubSub.subscribe('auth-data', (msg, msgValue) => {
      if(msg == 'isLogged'){
        this.authData.isLogged = msgValue;
      }
    })
  }
}

export default NavbarController;
