import { Component, OnInit, Inject } from '@angular/core';
import { filterTasks } from '../filterTasks-pipe';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  pipes: [ filterTasks ],
})
export class TodosComponent implements OnInit {

  constructor(
    @Inject('TodoService') private TodoService,
    @Inject('TaskService') private TaskService,
    ) { }

  ngOnInit() {
  }

}
