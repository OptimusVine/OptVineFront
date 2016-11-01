import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'
import { Observable, Subject } from 'rxjs';
import '../rxjs-extensions'

import { Todo} from '../objects/todos'

import { baseUrl } from '../shared/config'

@Injectable()
export class TodoService {
    private _todos$: Subject<Todo[]>;
    private dataStore: {
        todos: Todo[]
    }

    constructor(private http: Http) { 
        this.dataStore = {todos: []}
        this._todos$ = <Subject<Todo[]>>new Subject();
    }

    get todos$(){
        return this._todos$.asObservable();
    }

    loadAll(){
        this._todos$.next(this.dataStore.todos);
        this.http.get(`${baseUrl}/todos`).map(response => response.json()).subscribe(data => {
            this.dataStore.todos = data;
            this._todos$.next(this.dataStore.todos);
        }, error => console.log('Could not load todos.'));
    }


    public completeTodo(todo: string){
        let completeUrl = `http://localhost:5000/todos/` + todo + `/complete`
        console.log(completeUrl)
        return this.http.get(completeUrl)
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    public postTodo(name: string, asana_assignee: {}){
        let body = JSON.stringify({name, asana_assignee})
        console.log(body)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      
      let postUrl = `http://localhost:5000/todos`

        console.log("attemping to post task " + name)
       return this.http.post(postUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);          
    }

    public getTodos(){
       return this.http.get(`http://localhost:5000/todos`)
             .map((res) =>{
                 let json = res.json();
                 return json;
        })
    }

    public pullIncomplete(){
        return this.http.get(`http://localhost:5000/todos/Incomplete/pull`)
             .map((res) =>{
                 let json = res.json();
                 console.log(json)
                 return json;
        })
    }

    public pullMyIncomplete(){
        return this.http.get(`${baseUrl}/todos/pull/myTasks`)
                 .map(this.extractData)
                 .catch(this.handleError);  
    }

    public refreshIncomplete(){
        return this.http.get(`http://localhost:5000/todos/Incomplete/refresh`)
             .map((res) =>{
                 let json = res.json();
                 console.log(json)
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

private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Promise.reject(errMsg);
}




  private extractData(res: Response) {
    let body = res.json();
    console.log("PEOPLE SERVICE RESULT:")
    console.log(body)
    return body || { };
  }

}


