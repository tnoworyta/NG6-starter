class LoginController {
  constructor() {
    this.name = 'login';
    //this.firebaseObj = new Firebase("https://mdoc-e8b69.firebaseio.com");
  }

  login() {
    console.log('Login called chief!')
    console.log(this.user)
  }
}
export default LoginController;
