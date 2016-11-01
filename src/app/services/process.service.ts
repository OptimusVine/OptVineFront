import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'
import { Observable, Subject } from 'rxjs';
import '../rxjs-extensions'

import { baseUrl } from '../shared/config'

@Injectable()
export class ProcessService {
    private _processes$: Subject<any[]>
    private _options$: Subject<any[]>
    private dataStore: {
        processes: any[],
        options: any[]
    }

    constructor(
        private http: Http
        ) { 
        this.dataStore = {processes: [], options: []}
        this._processes$ = <Subject<any[]>>new Subject();
        this._options$ = <Subject<any[]>>new Subject();
        }

    get processes$(){
        return this._processes$.asObservable()
    }

    get options$(){
        return this._options$.asObservable()
    }

    loadOptions(){
        this.http.get(`${baseUrl}/processes/options`).map(response => response.json()).subscribe(data => {
            this.dataStore.options = data;
            this._options$.next(this.dataStore.options);
        }, error => console.log('Could not load options.'));        
    }

    loadProcesses(){
        this.http.get(`${baseUrl}/processes`).map(response => response.json()).subscribe(data => {
            this.dataStore.processes = data;
            this._processes$.next(this.dataStore.processes);
        }, error => console.log('Could not load processes.'));
    }

   public postProcess(obj: {}){
          
        let body = obj
        console.log(body)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      
      let postUrl = `http://localhost:5000/processes`

        console.log("attemping to post process ")
       return this.http.post(postUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);          
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




