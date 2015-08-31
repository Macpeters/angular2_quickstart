// it seems weird to export the class as it is being
// defined, but okay
export class TodoStore {
    constructor(){
        this.todoList = [];
    }

    add(item){
      // unshift (js array method) adds to beginning
        this.todoList.unshift({text:item,done:false});
    }
}