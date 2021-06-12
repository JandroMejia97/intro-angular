import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category.model';
import { Result } from '../../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  static API_URL = `${environment.apiUrl}/categories/`;

  constructor(private httpClient: HttpClient) { }

  getCategories(page: number = 1, page_size: number = 20): Observable<Result<Category>> {
    return this.httpClient.get<Result<Category>>(CategoryService.API_URL, {
      params: { page: page.toString(), page_size: page_size.toString()},
    });
  }
}
