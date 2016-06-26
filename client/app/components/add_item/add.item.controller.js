class AddItemController {
  constructor() {
    "ngInject";
    this.name = 'add_item';
  }

  add(keyEvent, item) {
    if(keyEvent.which === 13){
    if(item && item.desc && item.desc.length > 0){
      this.items.$add({desc: item.desc, created_at: new Date().getTime()});
      item.desc = undefined
    }
    }

  }
}

export default AddItemController;
