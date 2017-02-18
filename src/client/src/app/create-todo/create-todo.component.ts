import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(@Inject('TodoService') private TodoService) { }

  ngOnInit() {
  }

  createTodo(name) {
    this.TodoService.add(name.value);
    name.value = '';
  }

}
