import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-comtodo-item',
  templateUrl: './comtodo-item.component.html',
  styleUrls: ['./comtodo-item.component.css']
})
export class ComtodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Input() index:number;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

setClasses() {
  let classes = {
    todo: true,
    'is-complete': this.todo.completed

  }

  return classes;
}


onToggle(todo){
  todo.completed = !todo.completed;
  this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));

}

// onDelete(todo){
//   todo.completed = !todo.completed;
//   this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
// }

onDelete(index){
  this.deleteTodo.emit(index);
 
}

}

