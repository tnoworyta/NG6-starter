class NavbarController {
  constructor(AuthFirebaseUserService, pubSub) {
    "ngInject";
    this.name = 'navbar';
    this.authService = AuthFirebaseUserService;
    this.authData = {isLogged: this.authService.isAuthenticated()};
    pubSub.subscribe('auth-data', (msg, msgValue) => {
      console.log(msg, msgValue);
      if(msg == 'isLogged'){
        console.log('value set => before', this.authData);
        this.authData.isLogged = msgValue;
        console.log('value set => after', this.authData);
      }
    })
  }
}

export default NavbarController;
