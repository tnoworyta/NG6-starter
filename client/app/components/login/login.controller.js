class LoginController {
  constructor(AuthFirebaseUserService, pubSub) {
    "ngInject";
    this.name = 'login';
    this.ref = AuthFirebaseUserService;
    this.pubSub = pubSub;
    this.user = { email: '', password: '' }
  }

  login() {
    console.log('Login called chief!')
    console.log(this.user)
    this.ref.login(this.user.email, this.user.password, this.pubSub);
    //this.pubSub.publish('auth-data', 'isLogged', true);
    this.user = undefined
  }
}

export default LoginController;
