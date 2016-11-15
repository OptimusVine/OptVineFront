import { Component, OnInit } from '@angular/core';
//  import { AuthenticationService } from '../services/auth.service'
import { AddressService} from './services/address.service'
import { TodoService} from './services/todo.service'
import { WineService } from './services/wine.service'
import { ItemService} from './services/item.service'
import { WorkService } from './services/work.service'

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

  private message: string

  constructor(
// private authenticationService: AuthenticationService,
    private addressService: AddressService,
    private todoService: TodoService,
    private wineService: WineService,
    private workService: WorkService
    ){

  }

  

  getTodos(): void {
        this.todoService.getTodos().subscribe(todos => this.todos = todos);
    }

  ngOnInit(){
    this.workService.message$.subscribe(res => this.message = res)
    // this.addressService.getCityNameforZipCode('90066').subscribe((data) => {
    //   console.log(data)
    // })
  }

  public poopFlushed(){
    alert('it flushed')
  }
}
