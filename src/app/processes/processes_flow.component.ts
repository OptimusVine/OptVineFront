import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core"



@Component({
    selector: 'processes-flow',
    templateUrl: 'processes_flow.component.html'
})
export class ProcessesFlowComponent implements OnInit {
    @Input() processes: any[]
    @Output() q: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    goToProcess(p:any){
  //    console.log(p)
        this.q.emit(p)
    }
}