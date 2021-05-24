import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributesDirectivesComponent } from './components/attributes-directives/attributes-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AttributesDirectivesComponent,
    StructuralDirectivesComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AttributesDirectivesComponent,
    StructuralDirectivesComponent,
  ]
})
export class TwoPartModule { }
