import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyrouterExComponent } from './lazyrouter-ex.component';
const routes: Routes = [

    { path: 'lazyrouter', component: LazyrouterExComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayzrouterRoutingModule { }

