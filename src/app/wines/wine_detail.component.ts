import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../objects/items'

@Component({
    selector: 'wine-detail',
    templateUrl: 'wine_detail.component.html'
})
export class WineDetailComponent implements OnInit {
    private showingFields: boolean = false;

    constructor() { }

    @Input() wine: Item

    ngOnInit() { }

    showFields(){
        this.showingFields = !this.showingFields
    }
}