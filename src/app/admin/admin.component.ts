import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoService } from '../services/todo.service'
import { PeopleService } from '../services/people.service'
import { ProcessService } from '../services/process.service'
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
    private gotSourcings: boolean
    private refreshedSourcings: boolean
    private refreshedWines: boolean
    private message: string
    private pulledMine: boolean

    private asanaPeople: User[];
    private wines: Item[]
    private _wines$: Item[]
    private sourcings: Item[];

    


    constructor(
       private peopleService: PeopleService,
       private processService: ProcessService,
       private todoService: TodoService,
       private wineService: WineService
    ) { }

    ngOnInit() {
        this.wineService.wines$.subscribe(res => this._wines$ = res)
        this.wineService.loadAll()
    }

    clickWine(wine: Item): void {
        console.log(wine.description)
    }

    refreshSourcings(): void {
        this.refreshedSourcings = true
        this.wineService.refreshSourcings().subscribe(sourcings => this.sourcings = sourcings)
    }

    pullMyIncomplete(): void {
        this.pulledMine = true
        this.todoService.pullMyIncomplete().subscribe(res => this.myTodos = res)
    }

    refreshWines(): void {
        this.refreshedWines = true
        this.wineService.refreshWines().subscribe(wines => this.wines = wines)
    }

    getWines(): void {
        this.gotWines = true
        this.wineService.getWines()
    }

    getSourcings(): void {
        this.gotSourcings = true
        this.wineService.getSourcings().subscribe(sourcings => this.sourcings = sourcings)
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