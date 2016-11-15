import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../objects/todos'
import { TodoService} from '../../services/todo.service'

@Component({
    selector: 'todo-detail',
    templateUrl: 'todo_detail.component.html',
    styleUrls: ['todo_detail.component.css']
})
export class TodoDetailComponent implements OnInit {

    private stories: any[]

    @Input() todo: Todo;
    @Output() onMessage: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() markComplete: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit() { 
    }

    public message(){
        this.onMessage.emit(true)
    }

    public getStories(){
        this.todoService.getStories(this.todo._id).subscribe(res => this.stories = res)
    }
    

    public completeTodo(){
    //    console.log(this.todo._id)
        this.markComplete.emit(this.todo)
    }

}