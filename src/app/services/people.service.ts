import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs';
import '../rxjs-extensions'

import { AuthenticationService } from './auth.service'
import { User } from '../objects/users'



@Injectable()
export class PeopleService {
    public token: string;


    constructor(private http: Http,
                private authenticationService: AuthenticationService
      ) { }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }


  signup(email: string, password: string){
      let body = JSON.stringify({email, password})
      let headers = new Headers({ 'Content-Type': 'application/json',
                                   'accept': "application/json" });
      
      let reqOpt = new RequestOptions({
        headers: headers,
      })
      let postUrl = `http://localhost:5000/signup`

      console.log("attemping to post user " + body)
      return this.http.post(postUrl, body, reqOpt)
                        .map(this.extractData)
                        .catch(this.handleError);   
  }

    login(email: string, password: string){
      let body = JSON.stringify({email, password})
      let headers = new Headers({ 'Content-Type': 'application/json',
                                   'accept': "application/json" });
      
      let reqOpt = new RequestOptions({
        headers: headers,
      })
      let postUrl = `http://localhost:5000/login`


      console.log("attemping to post user " + body)
      return this.http.post(postUrl, body, reqOpt)
                        .map(this.extractData)
                        .catch(this.handleError);   


      
    }

    public getPeopleWithSlack(){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      let peopleUrl = `http://localhost:5000/people/withSlack`
       return this.http.get(peopleUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    public getPeopleWithAsana(){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      let peopleUrl = `http://localhost:5000/people/withAsana`
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

