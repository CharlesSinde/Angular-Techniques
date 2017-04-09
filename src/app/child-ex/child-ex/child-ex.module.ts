import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildExRoutingModule } from './child-ex-routing.module';
import { FirstChildRouteComponent } from './first-child-route/first-child-route.component';
import { SecondChildRouteComponent } from './second-child-route/second-child-route.component';
import { ChildExComponent } from 'app/child-ex/child-ex/child-ex.component';

@NgModule({
  exports: [ChildExRoutingModule],
  imports: [
    CommonModule,
    ChildExRoutingModule
  ],
  declarations: [FirstChildRouteComponent, SecondChildRouteComponent, ChildExComponent]
})
export class ChildExModule { }
