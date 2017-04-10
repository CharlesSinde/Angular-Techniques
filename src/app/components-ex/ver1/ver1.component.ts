import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-ver1',
  templateUrl: './ver1.component.html',
  styleUrls: ['./ver1.component.css']
})
export class Ver1Component implements OnInit {
isHidden: boolean = true;
  constructor() {}

  ngOnInit() {
 
  }
setVisible(){
  if(this.isHidden == true)
  {
  this.isHidden = false;
  }
  else
  {
    this.isHidden = true;
  }
}
}


