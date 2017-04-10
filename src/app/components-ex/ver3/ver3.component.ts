import { Component, OnInit } from '@angular/core';
import { V3ServiceService } from 'app/components-ex/ver3/services/v3-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ngc-ver3',
  templateUrl: './ver3.component.html',
  styleUrls: ['./ver3.component.css'],
})
export class Ver3Component implements OnInit {

  hideValue =true;
  constructor(public v3Service: V3ServiceService) {
   }

  ngOnInit() {
  }

  getBool() {
      this.hideValue = this.v3Service.hider;
      console.log(this.v3Service.hider);
  }
}
