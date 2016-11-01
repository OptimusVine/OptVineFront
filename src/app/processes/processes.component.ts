import { Component, OnInit } from '@angular/core';

import { ProcessService } from '../services/process.service'

@Component({
    selector: 'processes',
    templateUrl: 'processes.component.html'
})
export class ProcessesComponent implements OnInit {
    private selectedProcess: any
    private stepOneProcess: any
    private stepTwoProcess: any
    private _processes$: any[]
    private _options$: any[]
    private actionNotes: string
    private action: any
    private createName: string
    private createDescription: string
    private create


    constructor(
        private processService: ProcessService
    ) { 
        this.create = {
            stateName: "",
            description: "",
            type: ""
        }
    }

    requestProcess(p: any){
        console.log("emitting")
        console.log(p)
        
    }

    createProcess(){
        this.create.action = "new"
        this.processService.postProcess(this.create).subscribe()
    }

    handleAction(){
        let obj = {
            mainProcess: this.selectedProcess,
            process1: this.stepOneProcess,
            process2: this.stepTwoProcess,
            notes: this.actionNotes,
            action: this.action
        }
        console.log(obj)
        this.processService.postProcess(obj).subscribe()
    }

    selectProcess(process: any){
        this.selectedProcess = process;
    }

    setOption(action: any){
        console.log("SETTING OPTION")
        this.action = action.action
    }

    selectStepOne(process: any){
        this.stepOneProcess = process;
    }

    selectStepTwo(process: any){
        this.stepTwoProcess = process;
    }

    sendProcessChanges(action: string, main: any, stepOne: any, stepTwo: any){

    }


    ngOnInit() { 
    //    this.processService.postProcess().subscribe()
        this.processService.processes$.subscribe(res => this._processes$ = res)
        this.processService.options$.subscribe(res => this._options$ = res)
        this.processService.loadProcesses()
        this.processService.loadOptions()
    }

    
}