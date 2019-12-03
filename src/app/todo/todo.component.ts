import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  todos=null;


  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(response => {
        this.todos = response;
      });
  }
}
