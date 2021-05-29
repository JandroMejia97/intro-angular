import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }

  log(): void {
    console.log('ESTO ES UN LOG');
  }

  getProduct(id: number = 1293496): Observable<Product> {
    const ruta = `https://drf-products-api.herokuapp.com/api/products/${id}/`;
    return this.httpClient.get<Product>(ruta);
  }
}
