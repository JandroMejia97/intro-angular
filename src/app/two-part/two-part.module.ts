import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributesDirectivesComponent } from './components/attributes-directives/attributes-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { TwoPartRoutingModule } from './two-part-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    AttributesDirectivesComponent,
    StructuralDirectivesComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TwoPartRoutingModule,
  ],
  exports: [
    AttributesDirectivesComponent,
    StructuralDirectivesComponent,
  ]
})
export class TwoPartModule { }
