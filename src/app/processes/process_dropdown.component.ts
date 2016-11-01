import {Component, Input, Output, EventEmitter} from "@angular/core"


@Component({
    selector: 'process-dropdown',
    templateUrl: 'process_dropdown.component.html'
})

export class ProcessDropdownComponent{
    public selectedProcess: any

    @Input() processes: any[];
    @Output() select = new EventEmitter();
    
    ngOnInit(){
        
    }

    selectProcess(): void {
        console.log(this.selectedProcess)
        if(!this.selectedProcess){

        } else {
            this.select.emit(this.selectedProcess)
        }
        
    }

}