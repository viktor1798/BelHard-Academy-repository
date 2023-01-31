import { Component } from '@angular/core';

const todos:any[]=[
  {
    title:"Новая задача 1",
    completed: true,
    icon:"check_box"

  },
  {
    title:"Новая задача 2",
    completed: false,
    icon:"check_box"
  },
  {
    title:"Новая задача 3",
    completed: false,
    icon:"check_box"
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
}
