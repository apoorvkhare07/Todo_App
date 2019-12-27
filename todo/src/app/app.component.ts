import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todoArray = [];

  addTodo(value){
    this.todoArray.push(value);
    console.log(this.todoArray);
  }

  removeTodo(value){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(value== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }
}
