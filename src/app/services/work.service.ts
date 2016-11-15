import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'
import { Observable, Subject } from 'rxjs';
import '../rxjs-extensions'
import { baseUrl } from '../shared/config'
// import { Item } from '../objects/items'
@Injectable()
export class WorkService {
    private _work$: Subject<any[]>;
    private _message$: Subject<any>;
    private dataStore: {
        work: any[],
        message: any
    }
    private message

constructor(private http: Http) { 
        this.dataStore = {work: [], message: ""}
        this._work$ = <Subject<any[]>>new Subject();
        this._message$ = <Subject<any>> new Subject();
    }

get message$(){
        return this._message$.asObservable();
    }



public addItemToWork(work:any, item:any){
    let body = {}
    console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${baseUrl}/works/${work._id}/item/${item._id}`, body)
        .map(this.extractData)
        .catch(this.handleError)    
    }
public addTodoToWork(work:any, todo:any){
    let body = {}
 //   console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${baseUrl}/works/${work._id}/todo/${todo._id}`, body)
        .map(this.extractData)
        .catch(this.handleError)    
    }
public postWork(title: string){
    let work = {work: {title: title}}
    let body = JSON.stringify({work})
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${baseUrl}/works`, work)
        .map(this.extractData)
        .catch(this.handleError)    
 }

get works$(){
        return this._work$.asObservable();
    }

public loadAll(){
        this.http.get(`${baseUrl}/works`).map(response => response.json()).subscribe(data => {
            this.dataStore.work = data;
            this.dataStore.message = " SET "
       //     console.log(this.dataStore)
            this._work$.next(this.dataStore.work);
        }, error => console.log('Could not load work.'));
     }

public completeWork(work:any){
    let body = {}
//    console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${baseUrl}/works/${work._id}/complete`, body)
        .map(this.extractData)
        .catch(this.handleError)    
    }

private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Promise.reject(errMsg);
 }

public extractData(res: Response) {
    let body = res.json();
    console.log(body)
    if(body.message){
      //  console.log(this._message$)
      //  console.log(this.dataStore)
       this.message = body.message
       console.log(this.message)
    }
    return body || { };

  }
}