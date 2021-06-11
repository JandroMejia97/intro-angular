import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnChanges {
  @Input()
  products: Product[] = [];
  @Output()
  productDelete = new EventEmitter<number>();
  @Output()
  productDetail = new EventEmitter<number>();
  @Output()
  productUpdate = new EventEmitter<number>();
  displayedColumns = ['id', 'name', 'brand', 'category', 'currentPrice', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // const products = changes.products;
    const { products } = changes;
    if (products) {
      // this.dataSource.data = products.currentValue;
      this.dataSource.data = this.products;
    }
  }

}