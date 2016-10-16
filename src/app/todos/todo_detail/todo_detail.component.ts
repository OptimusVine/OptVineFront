import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../objects/todos'
import { TodoService} from '../../services/todo.service'

@Component({
    selector: 'todo-detail',
    templateUrl: 'todo_detail.component.html',
    styleUrls: ['todo_detail.component.css']
})
export class TodoDetailComponent implements OnInit {

    @Input() todo: Todo;

    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit() { 
    }

}