import { Pipe, PipeTransform } from "@angular/core";
import { Injectable } from '@angular/core';
import { Todo } from '../objects/todos'
 
@Pipe({
    name: "filter",
    pure: false
})

@Injectable()
export class TodoFilterPipe implements PipeTransform {
    transform(items: any[], args: any): any {

   //    console.log(args)
        if (items==null) {
            return null;
        }

        let argLength = 0
        for(let key in args){
            argLength++
        }

       return items = items.filter(item => {
            let argsCount = 0   
            if('asana_assignee' in args){
                if(item.asana_assignee){ // if has an assignee
                    if(item['asana_assignee'].id == args['asana_assignee'].id){ // compare the id of the sub prop to the filter sub prop   
                        argsCount++ // increment
                        } else {

                    }
                }
            }

            for (let key in item) {
                if(!(key in args) ){
                    // if thee is no args[key], do nothing
                } else if (key == "asana_assignee"){

                }  else {
                    if ((item[key]) == args[key] ) { // if the item property matches the filter property 
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


        // items = items.filter(item => item.asana_assignee);
        // filter items array, items which match and return true will be kept, false will be filtered out
    //    return items.filter(item => item == args);
    }
}