import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product } from './core/models/product.model';
import { Result } from './core/models/result.model';
import { ProductService } from './core/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  result: Result<Product> = undefined;
  productControl = new FormControl('');
  filteredOptions: Observable<Product[]> = of([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result: Result<Product>) => {
      this.result = result;
    });
    this.filteredOptions = this.productControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.result?.results.slice())
      );
  }

  displayFn(product: Product): string {
    return product && product.name ? product.name : '';
  }

  private filter(name: string): Product[] {
    const filterValue = name.toLowerCase();

    return this.result?.results.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  updateProduct(product: Product): void {
    console.log(product);
    this.productService.updateProduct(product).subscribe((product: Product) => console.log(product));
  }
}
