import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'
import { Item } from '../objects/items'

import { TodoFilterPipe } from '../pipes/todo-filter.pipe'

import { MessageService } from '../services/message.service'
import { TodoService} from '../services/todo.service'
import { WineService } from '../services/wine.service'

@Component({
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css'],
    providers: [TodoFilterPipe]
})
export class TodosComponent {
    public myTodos: Todo[];
    public selectedTodo: Todo;
    public showingMine: boolean = false
    public showingIncomplete: boolean = true
    private _wines$: Item[]
    private _todos$: Todo[]

    public filter: boolean = true
    public me: number
    public filterargs = {
                        asana_assignee: {id: 10363492364586, name: "Kjiel Carlson"},
                        complete: false,
                        };

    constructor(
        private todoService: TodoService,
        private todoFilterPipe: TodoFilterPipe,
        private messageService: MessageService,
        private wineService: WineService
    ) { }

    ngOnInit() {
        console.log("onInit")
        this.getTodos();
        this.me = 10363492364586
        this.wineService.wines$.subscribe(res => this._wines$ = res)
        this.todoService.todos$.subscribe(res => this._todos$ = res)
        this.wineService.loadAll()
        this.todoService.loadAll()
    }

    filterSwitch(): void {
        this.filter = !this.filter
    }

    completeTodo(y: boolean): void {
        console.log("Attempting to complete")
        this.todoService.completeTodo(this.selectedTodo._id).subscribe(todo => this.selectedTodo = todo)
    }

    showMine(): void {
        if('asana_assignee' in this.filterargs){
            delete this.filterargs.asana_assignee
            this.showingMine = false
        } else {
            this.filterargs.asana_assignee = {id: 10363492364586, name: "Kjiel Carlson"}
            this.showingMine = true
        }
    }
/*
    sendMessage(): void {
        let text = "This message"
        this.messageService.sendMessage(text).subscribe();
    }
*/

    filterComplete(): void {
        if('complete' in this.filterargs){
            delete this.filterargs.complete
            this.showingIncomplete = false
        } else {
            this.filterargs.complete = false
            this.showingIncomplete = true
        }
    }

    @Input() todos: Todo[];



    onSelect(todo: Todo): void {
        this.selectedTodo = todo
        console.log(todo)
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe(todos => this.myTodos = todos);
    }

}