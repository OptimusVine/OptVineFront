import { Component, OnInit } from '@angular/core';

import { Item } from '../objects/items'

import { TodoFilterPipe } from '../pipes/todo-filter.pipe'

import { WineService } from '../services/wine.service'



@Component({
    selector: 'wines',
    templateUrl: 'wines.component.html',
    providers: [TodoFilterPipe]
})
export class WinesComponent implements OnInit {
     private _wines$: Item[]
     private _processes$: any[]
     private selectedWine: Item
     public filterargs = {
                        type: "Wine"
                        };

    constructor(
        private todoFilterPipe: TodoFilterPipe,
        private wineService: WineService
    ) { }

    requestProcess(p: any){
        console.log(p)
        this.wineService.requestProcess(p)
    }

    ngOnInit() { 
        this.wineService.wines$.subscribe(res => this._wines$ = res)
        this.wineService.processes$.subscribe(res => this._processes$ = res)
        this.wineService.loadAll()
        this.wineService.loadProcesses()
    }

    setWine(wine: Item){
        this.selectedWine = wine
    }
}