import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'
import { Observable, Subject } from 'rxjs';
import '../rxjs-extensions'

import { baseUrl } from '../shared/config'

import { Item } from '../objects/items'

@Injectable()
export class WineService {
    private _wines$: Subject<Item[]>;
    private _processes$: Subject<any[]>
    private dataStore: {
        wines: Item[],
        processes: any[]
    }


    constructor(private http: Http) { 
        this.dataStore = {wines: [], processes: []}
        this._wines$ = <Subject<Item[]>>new Subject();
        this._processes$ = <Subject<any[]>>new Subject();
    }

    get wines$(){
        return this._wines$.asObservable();
    }

    requestProcess(p:any){
        this.http.get(`${baseUrl}/processes/${p._id}`).map(response => response.json()).subscribe(data => {
            this.dataStore.wines = data;
            this._wines$.next(this.dataStore.wines);
        }, error => console.log('Could not load wines.'));
    }

    loadAll(){
        this.http.get(`${baseUrl}/wines`).map(response => response.json()).subscribe(data => {
            this.dataStore.wines = data;
            this._wines$.next(this.dataStore.wines);
        }, error => console.log('Could not load wines.'));
    }

    get processes$(){
        return this._processes$.asObservable()
    }

    loadProcesses(){
        this.http.get(`${baseUrl}/processes`).map(response => response.json()).subscribe(data => {
            this.dataStore.processes = data;
            this._processes$.next(this.dataStore.processes);
        }, error => console.log('Could not load processes.'));
    }

    public refreshSourcings(){
        

        return this.http.get(baseUrl + `/sourcings/refresh`)
             .map((res) =>{
                 let json = res.json();
                 return json;
        })
    }

    public refreshWines(){
        return this.http.get(baseUrl + `/wines/refresh`)
             .map((res) =>{
                 let json = res.json();
                 return json;
        })
    }



    public getWines(){
        this.http.get(`${baseUrl}/wines`).map(response => response.json()).subscribe(data => {
            this.dataStore.wines = data;
            this._wines$.next(this.dataStore.wines);
            console.log(data)
        }, error => console.log('Could not load wines.'));
    }

    public getSourcings(){
       return this.http.get(baseUrl + `/sourcings`)
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