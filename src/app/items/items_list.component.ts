import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'

import { OrderByPipe } from '../pipes/orderBy.pipe'
import { TodoFilterPipe } from '../pipes/todo-filter.pipe'

@Component({
    selector: 'item-list',
    templateUrl: 'items_list.component.html',
 // styleUrls: ['item_list.component.css'],
    providers: [TodoFilterPipe, OrderByPipe]
})
export class ItemListComponent implements OnInit {
    public myItems: any[];
    public selectedItem: any;

    @Input() items: any[];
    @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private todoFilterPipe: TodoFilterPipe
    ) { }

    ngOnInit() { }

    onSelect(item: any): void {
        this.selectedItem = item
        this.selectItem.emit(item)
    }

}