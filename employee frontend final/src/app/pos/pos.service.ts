import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pos } from './pos.model';

@Injectable({
  providedIn: 'root'
})
export class PosService {
  private apiUrl = 'http://localhost:8080/api/v1/products'; // Adjust as necessary

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Pos[]> {
    return this.http.get<Pos[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Pos> {
    return this.http.get<Pos>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Pos): Observable<Pos> {
    return this.http.post<Pos>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Pos): Observable<Pos> {
    return this.http.put<Pos>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
