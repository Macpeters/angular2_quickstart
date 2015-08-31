// import modules
import {Component, Template, bootstrap,Foreach} from 'angular2/angular2';
import {TodoStore} from 'services/TodoStore';

// signifies that ToDoApp is a component.  Why is
// it outside of the class if it's directly related
// to it?
@Component({
  // this is the html 'selector' for the component
  selector: 'todo-app',
  // these is the services the component depends on
  componentServices: [
      TodoStore
  ]
})
// specifies template used by component
@Template({
  url: 'templates/todo.html',
  // the directives needed
  directives: [Foreach]
})

// this is the component.  
// Why it's not called a class I don't know
class TodoApp {

  todoStore : TodoStore;

  // wow. They called it constructor.
  constructor(todoStore: TodoStore) {
    // inject an instance of the service
    this.todoStore = todoStore;
  }

  add($event,newtodo){
    // if enter key
      if($event.which === 13){
        this.todoStore.add(newtodo.value);
        newtodo.value = '';
      }
  }

  toggleTodoState(todo){
    todo.done = !todo.done;
  }

}
// init the module
bootstrap(TodoApp);