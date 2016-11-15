import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../objects/items'

import { OrderByPipe } from '../pipes/orderBy.pipe'

@Component({
    selector: 'item-detail',
    templateUrl: 'item_detail.component.html',
    providers: [OrderByPipe]
})
export class ItemDetailComponent implements OnInit {
    private showingFields: boolean = false;

    private changing: boolean = false;
    private newRank


    constructor() { }

    @Output() rankChange: EventEmitter<any> = new EventEmitter<any>();
    @Input() item: Item

    ngOnInit() { }

    showFields(){
        this.showingFields = !this.showingFields
    }

    requestChange(){
        this.changing = true 
    }

    pushChange(){
        if(this.newRank){
            this.rankChange.emit(this.newRank)
            this.changing = false
        }
    }
}