import { Component, OnInit } from '@angular/core';

import { FilterPipe } from '../pipes/filter.pipe'
import { OrderByPipe } from '../pipes/orderBy.pipe'

import { WorkService } from '../services/work.service'
import { TodoService } from '../services/todo.service'
import { ItemService } from '../services/item.service'

@Component({
    selector: 'work',
    templateUrl: 'work.component.html',
    providers: [FilterPipe, OrderByPipe]
})
export class WorkComponent implements OnInit {
    private _work$: any[]
    private _todo$: any[]
    private _item$: any[]
    private types: any[]

    private selectedWork: any
    private selectedTodo: any
    private selectedItem: any

    private newTitle: string

    private listTodos: boolean
    private listItems: boolean

    constructor(
        private workService: WorkService,
        private todoService: TodoService,
        private itemService: ItemService,
    ) { 
        this.types = []
    }

    private showTodos(){
        this.listTodos = !this.listTodos
        this.listItems = false
    }

    private showItems(){
        this.listItems = !this.listItems
        this.listTodos = false
    }

    private selectTodo(todo: any){
        this.selectedTodo = todo
        this.listTodos = true
        this.listItems = false
    }

    private selectItem(item: any){
        this.selectedItem = item
        this.listTodos = false
        this.listItems = true
    }

    changeItemRank(r: string): void {
        this.itemService.changeRank(this.selectedItem, r).subscribe()
    }

    completeWork(): void {
        this.workService.completeWork(this.selectedWork).subscribe()       
    }

    completeTodo(): void {
        console.log("Attempting to complete")
        this.todoService.completeTodo(this.selectedTodo._id).subscribe(todo => this.selectedTodo = todo)
    }

    private addItemToWork(){
        if(!this.selectedItem || !this.selectedWork){
            return
        } else {
            this.workService.addItemToWork(this.selectedWork, this.selectedItem)
                            .subscribe(res => this.workService.loadAll())
        }
    }

    populateTypes(list): void {
        if(list){
        //  console.log(list)
            for(let i=0; i<list.length; i++){
                if(this.types.indexOf(list[i].type) == -1 ){
                    this.types.push(list[i].type)
                } 
            }
        } 
    }

    setItems(): void{
        this.itemService.loadAll()    
    }

    private addTodoToWork(){
        if(!this.selectedTodo || !this.selectedWork){
            return
        } else {
            this.workService.addTodoToWork(this.selectedWork, this.selectedTodo)
                            .subscribe(res => this.workService.loadAll())
        }
    }

    ngOnInit() {
        this.workService.works$.subscribe(res => this._work$ = res)
        this.todoService.todos$.subscribe(res => this._todo$ = res)
        this.itemService.items$.subscribe(res => this._item$ = res)
        this.itemService.items$.subscribe(res => this.populateTypes(res))
        this.workService.loadAll()
        this.todoService.loadAll()
        this.itemService.loadAll()
         }

    refreshWork(){
        this.workService.loadAll()
        this.todoService.loadAll()
        this.itemService.loadAll()
   //     setTimeout( this.resetSelected(), 3000 )
    }



    postWork(){
        this.workService.postWork(this.newTitle).subscribe(res => this.postedWork(res))
        }

    // resetSelected(){
    //     console.log("DELAYED...")
    //     if(this.selectedWork){
    //         for(let i=0; i<this._work$.length; i++){
    //             if(this._work$[i]._id == this.selectedWork._id){
    //                 console.log("MATCHED")
    //                 this.selectedWork = this._work$[i]
    //             }
    //         }
    //     }
    // }

    postedWork(work: any){
        this.selectedWork = work
        this.workService.loadAll()
    }

    onSelect(work: any): void {
        this.selectedWork = work
    //  this.selectTodo.emit(todo)
    }

}