import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../services/todo.service'
import { PeopleService } from '../services/people.service'
import { WineService } from '../services/wine.service'

import { Todo } from '../objects/todos'
import { User } from '../objects/users'
import { Item } from '../objects/items'

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css'],
})
export class AdminComponent implements OnInit {
    public myTodos: Todo[];
    private newTodo: Todo
    private pulledIncomplete: boolean;
    private refreshedIncomplete: boolean;
    private postedTodo: boolean
    private pulledAsanaPeople: boolean
    private gotWines: boolean
    private message: string

    private asanaPeople: User[];
    private wines: Item[];

    


    constructor(
       private peopleService: PeopleService,
       private todoService: TodoService,
       private wineService: WineService
    ) { }

    ngOnInit() {
        
    }

    getWines(): void {
        this.gotWines = true
        this.wineService.getWines().subscribe(wines => this.wines = wines)
    }

    getPeopleWithAsana(): void {
        this.pulledAsanaPeople = true
        this.peopleService.getPeopleWithAsana().subscribe(people => this.asanaPeople = people)
    }

    postTodo(): void {
        if(!this.message){return}
        let todo = this.message
        let asana_assignee = {id: 10363492364586}
        this.todoService.postTodo(todo, asana_assignee).subscribe(todo => this.newTodo = todo);
        console.log("Posting New Todo Pending:")
        this.postedTodo = true
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