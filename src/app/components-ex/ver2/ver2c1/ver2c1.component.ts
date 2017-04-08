import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngc-ver2c1',
  templateUrl: './ver2c1.component.html',
  styleUrls: ['./ver2c1.component.css']
})
export class Ver2c1Component implements OnInit {

@Output() onHide = new EventEmitter<boolean>();
  constructor() { 
  }

  ngOnInit() {
 
  }
  onHidden(Hider: boolean) {
    this.onHide.emit(Hider);
    console.log(Hider);
  }

}
