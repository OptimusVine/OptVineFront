
export class Todo {
    id: number;
    name: string;
    _id: string;
    asana_assignee: number;
    complete: boolean;
    projects: [{id: number}];
    asana_id: number
}
