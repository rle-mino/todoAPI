import { Injectable } from '@angular/core';

interface Task {
  id:number,
  todoId:number,
  name:string,
}

@Injectable()
export class TaskService {

  tasks:Task[] = [
    { id: 0, todoId: 0, name: 'testTask 1' },
    { id: 1, todoId: 1, name: 'testTask 2' },
    { id: 2, todoId: 1, name: 'testTask 3' },
    { id: 3, todoId: 1, name: 'testTask 4' },
    { id: 4, todoId: 0, name: 'testTask 5' },
  ];
  gId:number = 5;

  constructor() { }

  add(name, todoId) {
    this.tasks = [{ name, id: this.gId++, todoId }, ...this.tasks];
  }

  remove(id) {
    this.tasks = this.tasks.filter(todo => todo.id !== id);
  }

}
