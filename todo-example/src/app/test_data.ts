import { Todo } from './todo-item/todo';
import { Owner } from './todo-item/owner';

const testData = [
    new Todo(1, 'TODO 1', false, new Owner('John', 'Doe')),
    new Todo(1, 'TODO 2', false, new Owner('John', 'Doe')),
    new Todo(1, 'TODO 3', false, new Owner('John', 'Doe'))
];

export const todos = testData;
