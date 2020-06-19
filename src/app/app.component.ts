import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'My Tasks';

  constructor() {
    this.todos.push({id: 1, todo: 'Passear com cachorro', done:false});
    this.todos.push({id: 2, todo: 'Fazer Café', done:false});
    this.todos.push({id: 3, todo: 'Estudar Programação', done:false});
  }

  concluirTarefa(index) {
    if (this.todos[index].done === true) {
      this.todos[index].done = false;
    }else {
      this.todos[index].done = true;
    }
  }

  removerTarefa(index) {
    this.todos.splice(index, 1);
  }
}
