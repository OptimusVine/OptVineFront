import {Component, Input, Output, EventEmitter} from "@angular/core"
import { User } from '../objects/users'

@Component({
    selector: 'user-dropdown',
    templateUrl: 'user_dropdown.component.html'
})

export class UserDropdownComponent{
    public selectedUser: User

    @Input() users: User[];
    @Output() select = new EventEmitter();
    
    ngOnInit(){
        
    }

    selectUser(): void {
        console.log(this.selectedUser)
        if(!this.selectedUser || !this.selectedUser.slack){

        } else {
            this.select.emit(this.selectedUser)
        }
        
    }

}