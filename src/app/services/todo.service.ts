import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable()
export class TodoService {

    constructor(private http: Http) { }

    public getTodos(){
       return this.http.get(`http://localhost:5000/todos`)
             .map((res) =>{
                 let json = res.json();
                 return json;
        })
    }

    public pullMyTodos(){
        return this.http.get(`http://localhost:5000/todos/pull/myTasks`)
             .map((res) =>{
                 let json = res.json();
                 return json;
        })
    }
}