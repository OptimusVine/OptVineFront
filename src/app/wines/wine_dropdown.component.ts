import {Component, Input, Output, EventEmitter} from "@angular/core"
import { Item } from '../objects/items'

@Component({
    selector: 'wine-dropdown',
    templateUrl: 'wine_dropdown.component.html'
})

export class WineDropdownComponent{
    public selectedWine: Item

    @Input() wines: Item[];
    @Output() select = new EventEmitter();
    
    ngOnInit(){
        
    }

    selectWine(): void {
        console.log(this.selectedWine)
        if(!this.selectedWine || !this.selectedWine.description){

        } else {
            this.select.emit(this.selectedWine)
        }
        
    }

}