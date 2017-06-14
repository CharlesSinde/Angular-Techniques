import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from '@angular/http';
import { RequestHeaders } from './jsonrequest';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';

import { ISWData } from './data-format';

@Component({
  selector: 'ngc-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})

export class ObservablesComponent implements OnInit {
name: Observable<string>;
time: Observable<number>;
containter: Observable<ISWData>;

  constructor(http: Http) {
    this.name = http.get('http://swapi.co/api/people/' + this.randomNumber() + '/', RequestHeaders)
      .map((res: Response) => res.json())
      .do(thing => console.log(thing))
      .map((data: { name: string }) => data.name)
      .catch((err) => {
        console.error('handling error within swapi get()', err);
        const fakeData = [{ name: 'no swapi info available' }];
        return Observable.of(fakeData);
      });

          this.time = new Observable<number>((observer: Observer<number>) => {
      console.log('Subscribing to time');
      let handle = setInterval(() => {
        console.log('emitting time');
        observer.next(new Date().getTime() % 10000);
      }, 100);
      // stop interval on unsubscribe
      return function () {
        console.log('Unsubscribing to time');
        clearInterval(handle);
      };
    })
  }

  ngOnInit() {
  }

  randomNumber (){
    let ranNum : number = Math.floor(Math.random() * 11) + 1;
     return  ranNum.toString();
  }

  reloadPage(){
    location.reload(false); 
  }

}
