import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'
import { TodoService} from '../services/todo.service'
import { TodoFilterPipe } from '../pipes/todo-filter.pipe'
import { MessageService } from '../services/message.service'

@Component({
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css'],
    providers: [TodoFilterPipe]
})
export class TodosComponent implements OnInit {
    public myTodos: Todo[];
    public selectedTodo: Todo;
    public showingMine: boolean = true
    public showingIncomplete: boolean = true
    public filter: boolean = false
    public me: number
    public filterargs = {
                        complete: false  ,
                        asana_assignee: {id: 10363492364586, name: "Kjiel Carlson"},
                        };


    filterSwitch(): void {
        this.filter = !this.filter
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

    constructor(
        private todoService: TodoService,
        private todoFilterPipe: TodoFilterPipe,
        private messageService: MessageService,
    ) { }

    ngOnInit() {
        this.getTodos();
        this.me = 10363492364586

    }

    onSelect(todo: Todo): void {
        this.selectedTodo = todo
        console.log(todo)
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe(todos => this.myTodos = todos);
    }

}