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
    public showingMine: boolean = false
    public me: number
    public me2 = 10363492364586;

    showMine(): void {
        this.showingMine = !this.showingMine
    }

    @Input() todos: Todo[];
    @Output() selectTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    constructor(
        private todoService: TodoService,
        private todoFilterPipe: TodoFilterPipe
    ) { }

    ngOnInit() { 
        this.getTodos();
        this.me = 10363492364586
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