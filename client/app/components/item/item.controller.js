class ItemController {
  constructor() {
    "ngInject";
    this.name = 'item';
  }

  remove(){
    this.items.$remove(this.item);
  }
}

export default ItemController;
