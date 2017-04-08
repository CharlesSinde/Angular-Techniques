import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsExComponent } from './components-ex/components-ex/components-ex.component';
import { StyleExComponent } from './style-ex/style-ex/style-ex.component';

const routes: Routes = [
  
   { path: '', pathMatch:'full', redirectTo: '/components'  },
   { path: 'components', component: ComponentsExComponent},
  { path: 'styles', component: StyleExComponent},
   { path: '**', pathMatch:'full', redirectTo: '/components' }
   // children: []
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
