import { Injectable } from '@angular/core';

interface Todo {
  id:number,
  name:string,
}

@Injectable()
export class TodoService {

  todos:Todo[] = [];
  gId:number = 0;

  constructor() { }

  add(name) {
    if (!name) return;
    this.todos = [{ name, id: this.gId++ }, ...this.todos];
  }

  remove(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
