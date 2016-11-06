import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'work-detail',
    templateUrl: 'work_detail.component.html'
})
export class WorkDetailComponent implements OnInit {
    private showingFields: boolean = false;

    constructor() { }

    @Input() work: any
    @Output() selectTodo: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() { }

    showFields(){
        this.showingFields = !this.showingFields
    }

    onSelect(todo: any): void {
   //     this.selectTodo = todo
        this.selectTodo.emit(todo)
    }
}