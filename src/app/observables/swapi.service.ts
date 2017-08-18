import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { RequestHeaders } from './jsonrequest';
import { ISWData } from './data-format';

import 'rxjs/add/operator/catch';

@Injectable()
export class SwapiService {

    constructor(private http: Http) { }

    getPerson(): Observable<ISWData>{
        const apiURL = 'http://swapi.co/api/people/' + this.randomNumber() + '/';

        return this.http.get(apiURL, RequestHeaders)
        .map(res => res.json())
        .catch(error => Observable.throw('Error retreiving data!'));
    }

    randomNumber () {
        const ranNum: number = Math.floor(Math.random() * 11) + 1;
         return  ranNum.toString();
      }
}