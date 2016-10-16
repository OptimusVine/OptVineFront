import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'
import { TodoService} from '../services/todo.service'
import { TodoFilterPipe } from '../pipes/todo-filter.pipe'

@Component({
    selector: 'todo-list',
    templateUrl: 'todo_list.component.html',
    styleUrls: ['todo_list.component.css'],
    providers: [TodoFilterPipe]
})
export class TodoListComponent implements OnInit {
    public myTodos: Todo[];
    public selectedTodo: Todo;
    public showingMine: boolean = false
    public me: number
    public me2 = 10363492364586;
    public filterargs = {id: 10363492364586, name: "Kjiel Carlson"};

    showMine(): void {
        this.showingMine = !this.showingMine
    }

    @Input() todos: Todo[];
    @Output() onFlushed: EventEmitter<boolean> = new EventEmitter<boolean>();
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
    }

    pullMyTodos(): void {
        this.todoService.pullMyTodos().subscribe(myTodos => this.myTodos = myTodos);
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe(todos => this.myTodos = todos);
    }

    public flush(){
        this.onFlushed.emit(true)
    }
}