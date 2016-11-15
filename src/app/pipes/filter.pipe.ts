import { Pipe, PipeTransform } from "@angular/core";
import { Injectable } from '@angular/core';
 
@Pipe({
    name: "filter",
    pure: false
})

@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], args: any): any {
        if (items==null) {
            return null;
        }
        let argLength = 0
        for(let key in args){
            argLength++
        }
       return items = items.filter(item => {
            let argsCount = 0   
            for (let key in item) {
                if(!(key in args) ){
                    // if thee is no args[key], do nothing
                } else {
                    if ((item[key]) == args[key] || args[key] == null || args[key] == "") { // if the item property matches the filter property 
                            argsCount++ // increment
                        } else {                     
                                                    
                        }
                    }

                } 
             if(argsCount == argLength){
                        return true
                    } else {
                        return false
                     }
        })
    }
}