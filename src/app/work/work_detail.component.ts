import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FilterPipe } from '../pipes/filter.pipe'
import { OrderByPipe } from '../pipes/orderBy.pipe'

@Component({
    selector: 'work-detail',
    templateUrl: 'work_detail.component.html',
    providers: [FilterPipe, OrderByPipe]
})
export class WorkDetailComponent implements OnInit {
    private showingFields: boolean = false;

    constructor() { }

    @Input() work: any
    @Output() selectTodo: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();
    @Output() completeWork: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() { }

    showFields(){
        this.showingFields = !this.showingFields
    }

    onSelectTodo(todo: any): void {
   //     this.selectTodo = todo
        this.selectTodo.emit(todo)
    }

    onSelectItem(item: any): void {
   //     this.selectTodo = todo
        this.selectItem.emit(item)
    }

    onComplete(){
        this.completeWork.emit(this.work)
    }

}