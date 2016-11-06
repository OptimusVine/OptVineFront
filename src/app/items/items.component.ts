import { Component, OnInit } from '@angular/core';

import { Item } from '../objects/items'

import { TodoFilterPipe } from '../pipes/todo-filter.pipe'

import { ItemService } from '../services/item.service'



@Component({
    selector: 'items',
    templateUrl: 'items.component.html',
    providers: [TodoFilterPipe]
})
export class ItemsComponent implements OnInit {
     private _item$: Item[]
     private selectedItem: Item
    //  public filterargs = {
    //                     type: "Wine"
    //                     };

    constructor(
        private todoFilterPipe: TodoFilterPipe,
        private itemService: ItemService
    ) { }


    ngOnInit() { 
        this.itemService.items$.subscribe(res => this._item$ = res)
        this.itemService.loadAll()
    }

    setWine(wine: Item){
        this.selectedItem = wine
    }
}