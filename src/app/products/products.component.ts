import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.observable
      .pipe(
        map((num: number) => {
          console.log(`map -> ${num}`);
          num = Math.pow(num, 2);
          console.log(`map -> ${num}`);
          return num;
        }),
        tap((num: number) => {
          console.log(`tap -> ${num}`);
          num = Math.pow(num, 2);
          console.log(`tap -> ${num}`);
        })
      )
      .subscribe((num: number) => console.log(`subscription -> ${num}`));
  }
}
