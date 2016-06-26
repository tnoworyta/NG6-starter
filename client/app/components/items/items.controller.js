class ItemsController {
  constructor($firebaseArray) {
    "ngInject";
    this.name = 'items';
    this.ref = new Firebase("https://mdoc1.firebaseio.com/items");
    this.items = $firebaseArray(this.ref);
  }

  add(item) {
    this.items.$add({desc: item.desc});
    item.desc = undefined
  }
}

export default ItemsController;
