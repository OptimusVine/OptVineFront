import { Component, OnInit } from '@angular/core';
import { AddressService} from './services/address.service'
import { TodoService} from './services/todo.service'

import { Todo } from './objects/todos' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app still works!';
  public poopColor: string = "blue";
  public todos: Todo[];


  constructor(
    private addressService: AddressService,
    private todoService: TodoService
    ){

  }

  getTodos(): void {
        this.todoService.getTodos().subscribe(todos => this.todos = todos);
    }

  ngOnInit(){
   
   
    this.addressService.getCityNameforZipCode('90066').subscribe((data) => {
      console.log(data)
    })

/*
    this.getTodos();

    this.todoService.getTodos().subscribe((data) => {
      console.log(data)
    })
*/

  }

  public poopFlushed(){
    alert('it flushed')
  }
}
