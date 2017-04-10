import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyrouterExComponent } from 'app/lazy-router/lazyrouter-ex/lazyrouter-ex.component';
import { LayzrouterRoutingModule } from 'app/lazy-router/lazyrouter-ex/layzrouter-routing.module';

@NgModule({
    declarations: [LazyrouterExComponent],
  imports: [
    CommonModule,
    LayzrouterRoutingModule
  ],

})
export class LazyRouterModule { }
