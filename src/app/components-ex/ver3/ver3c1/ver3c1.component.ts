import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription }  from 'rxjs/Subscription';
import { V3ServiceService } from 'app/components-ex/ver3/services/v3-service.service';


@Component({
  selector: 'ngc-ver3c1',
  templateUrl: './ver3c1.component.html',
  styleUrls: ['./ver3c1.component.css']
})
export class Ver3c1Component implements OnInit {
  @Input() astronaut: string;
  hidden = true;
  subscription: Subscription;
  constructor(private v3Service: V3ServiceService) {}

  ngOnInit() {
  }

  updateHidden(){
    this.v3Service.setHiddenValue(false)
  }
}
