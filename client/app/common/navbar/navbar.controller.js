class NavbarController {
  constructor($firebaseAuth, MyService) {
    "ngInject";
    this.name = 'navbar';
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
    this.authData = this.firebaseObj.getAuth();
    console.log(MyService.sayHello())
  }
}

export default NavbarController;
