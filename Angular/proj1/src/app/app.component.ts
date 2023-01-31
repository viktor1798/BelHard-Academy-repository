import { Component } from '@angular/core';

const todos:any[]=[
  {
    title:"Новая задача 1",
    completed: true,
  },
  {
    title:"Новая задача 2",
    completed: false,
  },
  {
    title:"Новая задача 3",
    completed: false,
  },

]


@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'] 
})

export class AppComponent {
  title = 'Angular 2';
  todos = todos;  
  togle(todo:any){
    todo.completed = !todo.completed
  }
}
