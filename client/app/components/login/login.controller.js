class LoginController {
  constructor(AuthFirebaseUserService, pubSub) {
    "ngInject";
    this.name = 'login';
    this.ref = AuthFirebaseUserService;
    this.pubSub = pubSub;
  }

  login() {
    this.ref.login(this.user.email, this.user.password, this.pubSub);
    this.pubSub.publish('auth-data', 'isLogged', true);
    this.user = undefined;
  }
}

export default LoginController;
