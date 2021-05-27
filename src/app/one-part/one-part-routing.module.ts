import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentAComponent } from './parent-a/parent-a.component';

const routes: Routes = [
  {
    path: '',
    component: ParentAComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class OnePartRoutingModule { }

