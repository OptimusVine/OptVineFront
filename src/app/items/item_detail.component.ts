import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../objects/items'

@Component({
    selector: 'item-detail',
    templateUrl: 'item_detail.component.html'
})
export class ItemDetailComponent implements OnInit {
    private showingFields: boolean = false;

    constructor() { }

    @Input() item: Item

    ngOnInit() { }

    showFields(){
        this.showingFields = !this.showingFields
    }
}