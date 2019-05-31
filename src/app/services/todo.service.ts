import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string ='https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=10';

  constructor(private http:HttpClient) { }

  // get todos
  getTodos(todosUrl:string, todosLimit:number = 10):Observable<Todo[]> {
    // return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    let BACKEND_URL = UrlService.BACKEND_URL;
    return this.http.get<Todo[]>(`${BACKEND_URL}${todosUrl}?_limit=${todosLimit}`);
  }

  // delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url =  `${this.todosUrl}./${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }





  // add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }


  // toggle completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

}
