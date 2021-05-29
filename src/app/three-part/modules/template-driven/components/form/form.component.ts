import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('productForm')
  productForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log({productForm: this.productForm});
    const { name } = this.productForm.value;
    alert(`Se guardó el producto: ${name}`);
  }

  clear(): void {
    this.productForm.reset();
    alert(`Se limpió el formulario`);
  }


}
