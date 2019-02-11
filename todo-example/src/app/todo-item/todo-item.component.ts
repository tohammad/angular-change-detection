import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, AfterViewChecked {
  @Input() todo: Todo;

  @Output() toggle = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle.emit(this.todo);
  }

  ngAfterViewChecked() {
    console.log('TodoItemComponent Changed');
  }

}
