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
        if (items==null) {
            return null;
        }
        let assignedItems = items.filter(item => item.asana_assignee);
        // filter items array, items which match and return true will be kept, false will be filtered out
        return assignedItems.filter(item => item.asana_assignee.id == args.id);
    }
}