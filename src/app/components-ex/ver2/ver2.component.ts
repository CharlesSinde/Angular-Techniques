import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngc-ver2',
  templateUrl: './ver2.component.html',
  styleUrls: ['./ver2.component.css']
})
export class Ver2Component implements OnInit {

  constructor() { }
  isHidden: boolean = true;
  ngOnInit() {
  }
  onHidden(hidder: boolean) {
    if(this.isHidden == false)
    {
      this.isHidden = true;
    }
    else
    {
      this.isHidden = false;
    }
    
  }
}
