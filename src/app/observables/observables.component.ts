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
import { SwapiService } from './swapi.service';

@Component({
  selector: 'ngc-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})

export class ObservablesComponent implements OnInit {
name: Observable<string>;
time: Observable<number>;
containter: Observable<ISWData>;

  constructor(http: Http,
              private swapiService: SwapiService
  ) {
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
    this.getName();
  }

  randomNumber (){
    let ranNum : number = Math.floor(Math.random() * 11) + 1;
     return  ranNum.toString();
  }

  reloadPage(){
    location.reload(false);
  }

  getName(){
    this.swapiService.getPerson()
      .subscribe(
        res => this.handleData(res),
        err => this.handleError(err)
      );
  }

  handleData(data: ISWData){
    (<HTMLInputElement>document.getElementById('name')).textContent = data.name;
    (<HTMLInputElement>document.getElementById('height')).textContent = data.height;
  }

  handleError(err){
    (<HTMLInputElement>document.getElementById('name')).textContent = 'failed';
    (<HTMLInputElement>document.getElementById('height')).textContent = 'failed';
  }

}
