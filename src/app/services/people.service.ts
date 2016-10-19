import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import '../rxjs-extensions'


@Injectable()
export class PeopleService {

    constructor(private http: Http) { }

    public getPeopleWithSlack(){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      let peopleUrl = `http://localhost:5000/people/withSlack`
       return this.http.get(peopleUrl)
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

