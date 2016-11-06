import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'
import { Observable, Subject } from 'rxjs';
import '../rxjs-extensions'

import { baseUrl } from '../shared/config'

import { Item } from '../objects/items'

@Injectable()
export class WorkService {
    private _work$: Subject<Item[]>;
    private dataStore: {
        work: Item[],
    }

// public addTodoToWork(work:any, todo:any){
//     let body = {work: {},
//                 todo: {}}
//     body.work = work
//     body.todo = todo
//     console.log(body)
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(`${baseUrl}/works/${work._id}/todo/${todo._id}`, body)
//         .map(this.extractData)
//         .catch(this.handleError)    
//     }

public addTodoToWork(work:any, todo:any){
    let body = {}
    console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${baseUrl}/works/${work._id}/todo/${todo._id}`, body)
        .map(this.extractData)
        .catch(this.handleError)    
    }

public postWork(){
    let work = {work: {title: "Test String"}}
    let body = JSON.stringify({work})
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${baseUrl}/works`, work)
        .map(this.extractData)
        .catch(this.handleError)    
}

constructor(private http: Http) { 
        this.dataStore = {work: []}
        this._work$ = <Subject<Item[]>>new Subject();
    }

get works$(){
        return this._work$.asObservable();
    }

public loadAll(){
        this.http.get(`${baseUrl}/works`).map(response => response.json()).subscribe(data => {
            this.dataStore.work = data;
            this._work$.next(this.dataStore.work);
        }, error => console.log('Could not load work.'));
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
    console.log(body)
    return body || { };

  }
}