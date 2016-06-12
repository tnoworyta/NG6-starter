class NavbarController {
  constructor($firebaseAuth, MyService) {
    "ngInject";
    this.name = 'navbar';
    console.log(MyService.sayHello())
  }
}

export default NavbarController;
