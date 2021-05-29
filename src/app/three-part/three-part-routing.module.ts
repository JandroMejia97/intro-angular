import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreePartComponent } from './components/three-part/three-part.component';

const routes: Routes = [
  {
    path: '',
    component: ThreePartComponent,
    children: [
      {
        path: 'reactivos',
        loadChildren: () => import('./modules/reactive/reactive.module').then(m => m.ReactiveModule),
      },
      {
        path: 'basados-en-plantillas',
        loadChildren: () => import('./modules/template-driven/template-driven.module').then(m => m.TemplateDrivenModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreePartRoutingModule { }
