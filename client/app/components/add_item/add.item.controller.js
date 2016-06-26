class AddItemController {
  constructor() {
    "ngInject";
    this.name = 'add_item';
  }

  add(keyEvent, item) {
    if(keyEvent.which === 13){
    if(item != undefined){
      this.items.$add({desc: item.desc, created_at: new Date().getTime()});
      item.desc = undefined
    }
    }

  }
}

export default AddItemController;
