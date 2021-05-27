import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    component: PruebaComponent,
  },
  {
    path: 'parte-1',
    loadChildren: () => import('./one-part/one-part.module').then(m => m.OnePartModule),
  },
  {
    path: 'parte-2',
    loadChildren: () => import('./two-part/two-part.module').then(m => m.TwoPartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
