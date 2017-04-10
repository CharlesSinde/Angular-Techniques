import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class V3ServiceService {
  hider = true;
  constructor() { }
  // Observable string sources
  instHiddenValue(hidden: boolean){
    this.hider = hidden;
  }
  returnHiddenVAlue(){
    return this.hider;
  }

}
