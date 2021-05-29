import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      price: [0.01, [Validators.required, Validators.min(0.01)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  onSubmit(): void {
    console.log({productForm: this.productForm});
    const { name } = this.productForm.value;
    alert(`Se guardó el producto: ${name}`);
  }

  clear(): void {
    this.productForm.reset();
    alert(`Se limpió el formulario`);
  }

}
