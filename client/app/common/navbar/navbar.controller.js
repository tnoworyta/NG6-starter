class NavbarController {
  constructor(AuthFirebaseUserService) {
    "ngInject";
    this.name = 'navbar';
    console.log(AuthFirebaseUserService.isAuthenticated())
  }
}

export default NavbarController;
