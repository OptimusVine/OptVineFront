import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class AddressService {

    constructor(private http: Http) { }

    public getCityNameforZipCode(zipcode: String){
       return this.http.get(`https://api.zippopotam.us/us/${zipcode}`)
             .map((res) =>{
                 let json = res.json();
                 return json;
        })
    }
}