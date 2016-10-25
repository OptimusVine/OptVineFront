import { BaseRequestOptions, RequestOptionsArgs, Headers, RequestMethod } from '@angular/http';
// import { baseUrl } from './config';

export class AuthenticatedRequest extends BaseRequestOptions {
    constructor() {
        super()
    }

    merge(options?: RequestOptionsArgs) {

        if (!!options 
     //   && options.method !== RequestMethod.Options
        ) {
            console.log('merge stuff because we can');
            if (localStorage.getItem('currentUser')) {
                let token = JSON.parse(localStorage.getItem('currentUser')).token;
                if (token) {
                //    console.log(token)
                    let headers = new Headers({
                     'Authorization': `Bearer ${token}`
                    });

                    options.headers = headers;
                    return super.merge(options);
                }
            } else {
             //   
            }

        }
        return super.merge(options);

    }



}