class LoginController {
  constructor($firebaseObject) {
    "ngInject";
    this.name = 'login';
    this.ref = new Firebase("https://mdoc-e8b69.firebaseio.com");
    this.$firebaseObject = $firebaseObject(this.ref);
  }

  login() {
    console.log('Login called chief!');
    console.log(this.user)
  }
}
export default LoginController;
