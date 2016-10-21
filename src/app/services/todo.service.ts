import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'
import '../rxjs-extensions'


@Injectable()
export class TodoService {

    constructor(private http: Http) { }


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


