import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../objects/todos'

@Component({
    selector: 'todo-table',
    templateUrl: 'todo_table.component.html'
})
export class TodoTableComponent implements OnInit {
    public selectedTodo: Todo;
        
    @Input() todos: Todo[];
    @Output() selectTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    constructor() { }


    onSelect(todo: Todo): void {
        this.selectedTodo = todo
        this.selectTodo.emit(todo)
    }



    ngOnInit() { }
}