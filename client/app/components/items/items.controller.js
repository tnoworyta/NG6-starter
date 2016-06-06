class ItemsController {
  constructor($firebaseArray) {
    "ngInject";
    this.name = 'items';
    this.ref = new Firebase("https://mdoc1.firebaseio.com/items");
    this.itemRecords = $firebaseArray(this.ref);
     //= [{desc: 'sdfsdf'}, {desc: 're4tefsdf'}]
    //console.log(this.firebaseObj)
  }

  add(item) {
    console.log('I want to add...', item.desc)
    this.itemRecords.$add({desc: item.desc})
    item.desc = undefined
  }

  remove(item){
    console.log(item)
    this.itemRecords.$remove(item)
  }
}

export default ItemsController;
