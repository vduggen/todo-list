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
    this.todos.push(new Todo(1, 'Passear com cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', true));
    this.todos.push(new Todo(3, 'Fazer café', false));
  }

  alterarTexto() {
    this.title = 'Text altered'
  }
}
