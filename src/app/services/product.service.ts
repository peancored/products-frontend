import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return (
      this.http.get<Product[]>(`${API_URL}/products.json`)
        .pipe(
          map((data: any) => data.products)
        )
    );
  }

  delete(product: Product): Observable<any> {
    return this.http.delete<Product>(`${API_URL}/products/${product.id}.json`);
  }

  create(product: Product): Observable<Product> {
    return (
      this.http.post<Product>(`${API_URL}/products.json`, { product })
        .pipe(
          map((data: any) => data.product)
        )
    );
  }

  update(product: Product): Observable<Product> {
    return (
      this.http.put<Product>(`${API_URL}/products/${product.id}.json`, { product })
        .pipe(
          map((data: any) => data.product)
        )
    );
  }

  get(productId: number): Observable<Product> {
    return (
      this.http.get<Product>(`${API_URL}/products/${productId}.json`)
        .pipe(
          map((data: any) => data.product)
        )
    );
  }
}
