import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'

import { OrderByPipe } from '../pipes/orderBy.pipe'
import { FilterPipe } from '../pipes/filter.pipe'

@Component({
    selector: 'item-list',
    templateUrl: 'items_list.component.html',
 // styleUrls: ['item_list.component.css'],
    providers: [FilterPipe, OrderByPipe]
})
export class ItemListComponent implements OnInit {
    public myItems: any[];
    public selectedItem: any;

    private orderByType = "type"

    private columns = ['type','description']

    private filterargs = {
        type: "Transportation",
    }

    setFilter(){

    }

    @Input() items: any[];
    @Input() types: any[];
    @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private FilterPipe: FilterPipe
    ) { }

    ngOnInit() { }



    onSelect(item: any): void {
        this.selectedItem = item
        this.selectItem.emit(item)
    }

}