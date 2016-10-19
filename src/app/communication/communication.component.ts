import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../objects/todos'
import { User } from '../objects/users'
import { MessageService } from '../services/message.service'
import { PeopleService } from '../services/people.service'

@Component({
    selector: 'communication',
    templateUrl: 'communication.component.html',
    styleUrls: ['communication.component.css'],
})
export class CommunicationComponent implements OnInit {
    public message: string
    public users: User[]
    public target: User
    public include: boolean
    public outbound: string

    sendMessage(): void {
        if(this.include){
            this.outbound = this.message + " \n " + this.todo.name
            if(this.todo.projects[0]){
                let projectlink = "https://app.asana.com/0/" + this.todo.projects[0].id + "/" + this.todo.asana_id
                this.outbound = this.outbound + " \n " + projectlink
            }
        } else {
            this.outbound = this.message
        }
        this.messageService.sendMessage(this.outbound, this.target.slack.id).subscribe();
    }

    filterComplete(): void {

    }

    @Input() todo: Todo;

    constructor(
        private messageService: MessageService,
        private peopleService: PeopleService
    ) { }

    ngOnInit() {
        this.getTodos()
    }

    setTarget(user: User){
        this.target = user
    }

    flipInclude(): void {
        this.include = !this.include
    }

    getTodos(): void {
        this.peopleService.getPeopleWithSlack().subscribe(users => this.users = users);

    }

}