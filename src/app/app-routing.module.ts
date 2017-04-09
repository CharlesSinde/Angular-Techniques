import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsExComponent } from './components-ex/components-ex/components-ex.component';
import { StyleExComponent } from './style-ex/style-ex/style-ex.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
   { path: '', pathMatch:'full', redirectTo: '/home'  },
  { path: 'home', component: HomeComponent},
   { path: 'components', component: ComponentsExComponent},
  { path: 'styles', component: StyleExComponent},
   { path: '**', pathMatch:'full', redirectTo: '/home' }
   // children: []
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
