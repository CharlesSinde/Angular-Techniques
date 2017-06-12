import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsExComponent } from './components-ex/components-ex/components-ex.component';
import { StyleExComponent } from './style-ex/style-ex/style-ex.component';
import { HomeComponent } from './home/home.component';
import { RoutingExComponent } from './routing-ex/routing-ex.component';
import { TestingComponent } from './testing/testing.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [ 
  { path: '', pathMatch:'full', redirectTo: '/home'  },
  { path: 'home', component: HomeComponent},
  { path: 'components', component: ComponentsExComponent},
  { path: 'routing', component: RoutingExComponent,},
  { path: 'styles', component: StyleExComponent},
  { path: 'testing', component: TestingComponent},
  { path: 'observs', component: ObservablesComponent},
  { path: 'lazyrouter', loadChildren: 'app/lazy-router/lazy-router.module#LazyRouterModule'},
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
   // children: []
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
