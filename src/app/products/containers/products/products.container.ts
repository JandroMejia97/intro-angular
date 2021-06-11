import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Observer, PartialObserver } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { Result } from 'src/app/core/models/result.model';
import { ProductDetailComponent } from '../../components/product-detail/product-detail.component';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit {
  result: Result<Product> = undefined;
  private detailProductObserver: PartialObserver<Product> = {
    next: (product: Product) => {
      const dialogRef = this.matDialog.open(ProductDetailComponent, { data: product });
      dialogRef.afterClosed().subscribe({
        next: (resp: { edit: boolean }) => {
          if (resp?.edit) {
            this.openForm(product);
          }
        },
      });
    },
    error: () => {},
    complete: () => {}
  }

  private updateProductObserver: PartialObserver<Product> = {
    next: (product: Product) => {
      this.openForm(product);
    },
    error: () => {},
    complete: () => {}
  }

  constructor(
    private matDialog: MatDialog,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductsPage(0);
  }

  getProductsPage(pageEvent: PageEvent | number): void {
    const number = (typeof pageEvent === 'number' ? pageEvent : pageEvent.pageIndex) + 1;
    let pageSize = 20;
    if (typeof pageEvent !== 'number') {
      pageSize = pageEvent.pageSize;
    }
    this.productService.getProducts(number, pageSize).subscribe((result: Result<Product>) => {
      this.result = result;
    });
  }

  updateProduct(id: number): void {
    this.productService.getProduct(id).subscribe(this.updateProductObserver);
  }

  deleteProduct(id: number): void {
    console.log(`deleteProduct(${id})`);
  }

  detailProduct(id: number): void {
    this.productService.getProduct(id).subscribe(this.detailProductObserver);
  }

  openForm(product?: Product) {
    this.matDialog.open(ProductFormComponent, { data: product })
  }

}
