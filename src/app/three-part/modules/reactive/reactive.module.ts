import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form'
  },
  {
    path: 'form',
    component: FormComponent
  }
];


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ReactiveModule { }
