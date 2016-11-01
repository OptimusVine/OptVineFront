import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { baseUrl } from '../shared/config'
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email, password): Observable<boolean> {
      let body = JSON.stringify({email, password})
      let headers = new Headers({ 'Content-Type': 'application/json',
                                   'accept': "application/json" });
      
    let postUrl = baseUrl + `/login`

    let reqOpt = new RequestOptions({
        headers: headers,
      })
      console.log(body)
      console.log(reqOpt)
        return this.http.post(postUrl, body, reqOpt)
            .map((response: Response) => {
                
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
                    console.log(localStorage)
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('auth_token');
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

