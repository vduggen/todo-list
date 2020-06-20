import { Component } from '@angular/core';
import { Todo, Completed } from './models/todo.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'My Tasks';
  public form: FormGroup;
  public completed: Completed[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      taskName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.loadData();
  }

  doneTask(index) {
    this.todos[index].done = true;

    this.saveData();

    this.completed.push(index);
  }

  asUndoned(index) {
    this.todos[index].done = false;

    this.saveData();

    this.completed.splice(0, 1);
  }

  removerTarefa(index) {
    this.todos.splice(index, 1);

    this.saveData();

    this.completed.splice(0, 1);
  }

  addTask() {
    const title = this.form.controls['taskName'].value;
    const id = this.todos.length  + 1;
    this.todos.push({id, todo: title, done:false})
    this.saveData();
    this.form.reset();
  }

  saveData() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos',data);
  }

  loadData() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    }else {
      this.todos = [];
    }
  }
}
