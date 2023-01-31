import { Component } from '@angular/core';

const todos:any[]=[
  // "Новая задача 1",
  // "Новая задача 2",
  // "Новая задача 3",
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
