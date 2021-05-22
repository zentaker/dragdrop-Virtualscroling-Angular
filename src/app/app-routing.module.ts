import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';
import { VirtualComponent } from './components/virtual/virtual.component';

const routes: Routes = [
  { path: 'home', component: VirtualComponent },
  { path: 'drag', component: DragComponent },
  { path: 'paises', component: PaisesComponent },

  { path: '**', redirectTo: '/drag' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
