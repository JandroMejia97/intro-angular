import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './child-a/child-a.component';
import { GrandChildAComponent } from './grand-child-a/grand-child-a.component';
import { ParentAComponent } from './parent-a/parent-a.component';
import { FormsModule } from '@angular/forms';

import { OnePartRoutingModule } from './one-part-routing.module';

@NgModule({
  declarations: [
    ChildAComponent,
    ParentAComponent,
    GrandChildAComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OnePartRoutingModule,
  ]
})
export class OnePartModule { }
