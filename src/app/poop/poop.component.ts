import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'

@Component({
    selector: 'test-poop',
    templateUrl: 'poop.component.html'
})
export class poopComponent implements OnInit {
    @Input() color: string;
    @Input() todos: Todo[];
    @Output() onFlushed: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() { }

    public flush(){
        this.onFlushed.emit(true)
    }
}