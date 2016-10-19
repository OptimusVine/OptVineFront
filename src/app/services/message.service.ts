import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import '../rxjs-extensions'


@Injectable()
export class MessageService {

    constructor(private http: Http) { }

    public sendMessage(text: string, slackId: string){
      let body = JSON.stringify({text, slackId})
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      let messageUrl = `http://localhost:5000/message/sendSlack`

        console.log("attemping to send message " + text)
       return this.http.post(messageUrl, body, options)
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
    console.log("MAPPING in MESSAGE SERVICE")
    let body = res.json();
    return body.data || { };
  }

}

