import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingExComponent } from 'app/routing-ex/routing-ex.component';
import { SecondChildRouteComponent } from './second-child-route/second-child-route.component';
import { FirstChildRouteComponent } from './first-child-route/first-child-route.component';
import { ChildExComponent } from './child-ex.component';


const routes: Routes = [
  { path: 'childroute', component: ChildExComponent},
  { path: 'secondchild', component: SecondChildRouteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildExRoutingModule { }
