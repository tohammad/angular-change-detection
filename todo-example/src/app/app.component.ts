import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Todo } from './todo-item/todo';
import { Owner } from './todo-item/owner';
import {todos as initialData} from './test_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  
  todos: Array<Todo> = initialData;
    message: string;
    callback: Function = (message) => {
        console.log('setting message...');
        this.message = message;
    }

    constructor() {

    }

    toggleFirst() {
        this.todos[0].completed = ! this.todos[0].completed;
    }

    addTodo() {
        const newTodos = this.todos.slice(0);
        newTodos.push( new Todo(1, 'TODO 4', false, new Owner('John', 'Doe')));
        this.todos = newTodos;
        // this.todos.push(new Todo(1, 'TODO 4', false, new Owner('John', 'Doe')));
    }

    onAdd() {
        this.message = 'Adding Todo ...';
        this.addTodo();
    }
    ngAfterViewChecked(): void {
      console.log('AppComponent Changed');
    }
}
