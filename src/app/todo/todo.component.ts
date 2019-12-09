import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo = null;

  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users/3')
      .subscribe(response => {
        this.todo = response;
      });
  }
}
