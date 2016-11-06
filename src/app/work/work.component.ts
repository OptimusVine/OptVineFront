import { Component, OnInit } from '@angular/core';

import { WorkService } from '../services/work.service'
import { TodoService } from '../services/todo.service'
import { ItemService } from '../services/item.service'

@Component({
    selector: 'work',
    templateUrl: 'work.component.html'
})
export class WorkComponent implements OnInit {
    private _work$: any[]
    private _todo$: any[]
    private _item$: any[]
    private selectedWork: any
    private selectedTodo: any
    private selectedItem: any

    private listTodos: boolean

    constructor(
        private workService: WorkService,
        private todoService: TodoService,
        private itemService: ItemService,
    ) { }

    private showTodos(){
        this.listTodos = !this.listTodos
    }

    private selectTodo(todo: any){
        this.selectedTodo = todo
    }

    private selectItem(item: any){
        this.selectedItem = item
    }

    private addTodoToWork(){
        if(!this.selectedTodo || !this.selectedWork){
            return
        } else {
            this.workService.addTodoToWork(this.selectedWork, this.selectedTodo)
                            .subscribe()
        }
    }

    ngOnInit() {
        this.workService.works$.subscribe(res => this._work$ = res)
        this.todoService.todos$.subscribe(res => this._todo$ = res)
        this.itemService.items$.subscribe(res => this._item$ = res)
        this.workService.loadAll()
        this.todoService.loadAll()
        this.itemService.loadAll()
         }

    postWork(){
        this.workService.postWork().subscribe(res => this.selectedWork = res)
    }

    onSelect(work: any): void {
        this.selectedWork = work
    //  this.selectTodo.emit(todo)
    }

}