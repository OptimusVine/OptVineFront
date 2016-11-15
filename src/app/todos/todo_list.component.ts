import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'
import { TodoService} from '../services/todo.service'

import { OrderByPipe } from '../pipes/orderBy.pipe'
import { TodoFilterPipe } from '../pipes/todo-filter.pipe'

@Component({
    selector: 'todo-list',
    templateUrl: 'todo_list.component.html',
    styleUrls: ['todo_list.component.css'],
    providers: [TodoFilterPipe, OrderByPipe]
})
export class TodoListComponent implements OnInit {
    public myTodos: Todo[];
    public selectedTodo: Todo;
    
    public me

    showComplete: boolean = true
    public showMine: boolean = false

    private filterargs = {
        complete: false,
        asana_assignee: { name : "Kjiel Carlson", id : 10363492364586 }
    }



    filterMine(): void {
        if('asana_assignee' in this.filterargs){
            delete this.filterargs.asana_assignee
            this.showMine = false
        } else {
            this.filterargs.asana_assignee = { name : "Kjiel Carlson", id : 10363492364586 }
            this.showMine = true
        }
    }

    @Input() todos: Todo[];
    @Output() selectTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    constructor(
        private todoService: TodoService,
        private todoFilterPipe: TodoFilterPipe
    ) { }

    ngOnInit() { 
        this.me = { "name" : "Kjiel Carlson", "id" : 10363492364586 }
    }


    filterComplete(): void {
        if('complete' in this.filterargs){
            delete this.filterargs.complete
            this.showComplete = false
        } else {
            this.filterargs.complete = false
            this.showComplete = true
        }
    }

    onSelect(todo: Todo): void {
        this.selectedTodo = todo
        this.selectTodo.emit(todo)
    }

    pullMyTodos(): void {
        this.todoService.pullMyTodos().subscribe(myTodos => this.myTodos = myTodos);
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe(todos => this.myTodos = todos);
    }

}