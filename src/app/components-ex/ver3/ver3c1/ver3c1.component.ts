import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { V3ServiceService } from 'app/components-ex/ver3/services/v3-service.service';


@Component({
  selector: 'ngc-ver3c1',
  templateUrl: './ver3c1.component.html',
  styleUrls: ['./ver3c1.component.css']
})
export class Ver3c1Component implements OnInit {
  hidden = true;
  subscription: Subscription;
  constructor(private v3Service: V3ServiceService) {}

  ngOnInit() {
  }

  updateHidden() {
    if(this.v3Service.hider == true)
    {
      this.v3Service.instHiddenValue(false);
    }
    else{
      this.v3Service.instHiddenValue(true);
    }

  }
}
