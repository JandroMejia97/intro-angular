import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  productForm: FormGroup;
  product: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
    this.productForm.valueChanges.subscribe((value: any) => {
      this.product = value;
    });
  }

  setupForm() {
    this.productForm = this.formBuilder.group({
      // name: new FormControl('', Validators.required),
      name: ['', Validators.required],
      price: [0.01, [Validators.required, Validators.min(0.01)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', [this.isEmptyValue, Validators.minLength(6)]],
    });
  }

  isEmptyValue(control: AbstractControl): ValidationErrors | null {
    // const value = control.value;
    // Destructuración de objetos
    const { value, valid, errors } = control;
    if (value && value.length > 0) {
      return null;
    }
    return { isempty: true };
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

  get descriptionControl(): FormControl {
    return this.productForm.get('description') as FormControl;
  }

}
