import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Product } from '../../core/models/product.model';
import { Result } from '../../core/models/result.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  static API_URL = `${environment.apiUrl}/products/`;
  observable: Observable<number> = of<number>(5);

  constructor(private httpClient: HttpClient) {}

  getProducts(
    page: number = 1,
    page_size: number = 20
  ): Observable<Result<Product>> {
    // const httpParams = new HttpParams().set('page', page.toString());
    return this.httpClient.get<Result<Product>>(ProductService.API_URL, {
      params: { page: page.toString(), page_size: page_size.toString() },
    });
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${ProductService.API_URL}${id}/`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${ProductService.API_URL}${product.id}/`,
      product
    );
  }

  postProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${ProductService.API_URL}`, product);
  }

  deleteProduct(id: number): Observable<HttpResponse<never>> {
    return this.httpClient.delete<never>(
      `${ProductService.API_URL}${id}/`,
      { observe: 'response' }
    );
  }
}
