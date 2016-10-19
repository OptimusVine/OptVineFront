import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../services/todo.service'

import { Todo } from '../objects/todos'

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css'],
})
export class AdminComponent implements OnInit {
    public myTodos: Todo[];
    private pulledIncomplete: boolean;
    private refreshedIncomplete: boolean;

    constructor(
       private todoService: TodoService
    ) { }

    ngOnInit() {
        
    }

    pullIncompleteTodos(): void {
        this.todoService.pullIncomplete().subscribe(todos => this.myTodos = todos);
        console.log("Pull Incomplete Results Pending:")
        this.pulledIncomplete = true
    }

    refreshIncompleteTodos(): void {
        this.todoService.refreshIncomplete().subscribe(todos => this.myTodos = todos);
        console.log("Refresh Incomplete Results Pending:")
        this.refreshedIncomplete = true
    }

}