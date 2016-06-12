class NavbarController {
  constructor(AuthFirebaseUserService) {
    "ngInject";
    this.name = 'navbar';
    this.authService = AuthFirebaseUserService
  }
}

export default NavbarController;
