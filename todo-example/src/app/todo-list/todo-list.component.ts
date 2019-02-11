import { Component, AfterViewChecked, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo-item/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements AfterViewChecked {

  @Input()
  todos: Array<Todo>;

  @Input()
  callback: Function;

  @Output()
  addTodo = new EventEmitter<Object>();

  clicked = false;

  onToggle(todo) {
      console.log('toggling todo..');
      todo.completed = !todo.completed;

  }

  blowup() {
      console.log('Trying to blow up change detection...');
      this.clicked = true;
      this.addTodo.emit(null);
  }

  ngAfterViewChecked() {
    console.log('TodoListComponent Changed');
      if (this.callback && this.clicked) {
          console.log('changing status ...');
          this.callback(Math.random());
      }

  }

}
