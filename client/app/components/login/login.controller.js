class LoginController {
  constructor(AuthFirebaseUserService) {
    "ngInject";
    this.name = 'login';
    this.ref = AuthFirebaseUserService
  }

  login() {
    console.log('Login called chief!')
    console.log(this.user)
    this.ref.login(this.user.email, this.user.password)
    this.user = undefined
  }

  logout() {
    //this.firebaseObj.unauth();
    this.ref.logout()
  }
}

export default LoginController;
