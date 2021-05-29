import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreePartRoutingModule } from './three-part-routing.module';
import { ThreePartComponent } from './components/three-part/three-part.component';


@NgModule({
  declarations: [ThreePartComponent],
  imports: [
    CommonModule,
    ThreePartRoutingModule
  ]
})
export class ThreePartModule { }
