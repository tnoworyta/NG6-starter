class LoginController {
  constructor($firebaseAuth) {
    "ngInject";
    this.name = 'login';
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
  }

  login() {
    console.log('Login called chief!')
    console.log(this.user)

    this.firebaseObj.authWithPassword({
      "email": this.user.email,
      "password": this.user.password
    }, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        //authData = this.firebaseObj.getAuth();
        //console.log(authData)
      }
    });
    this.user = undefined 
  }

  logout() {
    this.firebaseObj.unauth();
  }
}

export default LoginController;
