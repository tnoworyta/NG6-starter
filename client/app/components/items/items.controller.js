class ItemsController {
  constructor() {
    "ngInject";
    this.name = 'items';
    this.firebaseObj = new Firebase("https://mdoc1.firebaseio.com");
    this.itemRecords = [{desc: 'sdfsdf'}, {desc: 're4tefsdf'}]
  }
}

export default ItemsController;
