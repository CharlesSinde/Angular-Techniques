import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class V3ServiceService {

  constructor() { }
  // Observable string sources
  private hiddenViewSource = new Subject<boolean>();

  hiddenView = this.hiddenViewSource.asObservable();

    setHiddenValue(hide: boolean) {
   return this.hiddenViewSource.next(hide);
  }


}
