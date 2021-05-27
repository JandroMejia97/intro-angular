import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributesDirectivesComponent } from './components/attributes-directives/attributes-directives.component';
import { HomeComponent } from './components/home/home.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'atributos',
        component: AttributesDirectivesComponent
      },
      {
        path: 'estructurales',
        component: StructuralDirectivesComponent
      }
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class TwoPartRoutingModule { }

