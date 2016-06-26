class ItemsController {
  constructor($firebaseArray) {
    "ngInject";
    this.name = 'items';
    this.ref = new Firebase("https://mdoc1.firebaseio.com/items");
    this.itemRecords = $firebaseArray(this.ref);
  }

  add(item) {
    this.itemRecords.$add({desc: item.desc});
    item.desc = undefined
  }

  remove(item){
    this.itemRecords.$remove(item);
  }
}

export default ItemsController;
