class LogoutController {
  constructor(AuthFirebaseUserService, pubSub) {
    "ngInject";
    this.name = 'logout';
    this.ref = AuthFirebaseUserService;
    this.pubSub = pubSub;
  }

  logout() {
    this.ref.logout(this.pubSub);
  }
}

export default LogoutController;
