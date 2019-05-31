import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] = [];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    let url = UrlService.todoURL;
  
    this.todoService.getTodos(url).subscribe(todos => {
      this.todos=todos;
    });
  }
  deleteTodo(index:number) {
    debugger;
    // Remove From UI
    // this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todos.splice(index,1);
    this.todos = [...this.todos];
    // Remove from server
    // this.todoService.deleteTodo(todo).subscribe();
  }


  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo =>{
      this.todos.push(todo);
    });
  }

}
