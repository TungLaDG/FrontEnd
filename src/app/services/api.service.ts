import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5184/api'

  constructor(private https: HttpClient) { }

  getItems(): Observable<any> {
    return this.https.get(`${this.baseUrl}/products`);
  }

  getCategories():Observable<any>{
    return this.https.get(`${this.baseUrl}/categories`)
  }

  getProductsByCategoryId(id: string):Observable<any>{
    return this.https.get<any[]>(`${this.baseUrl}/products/category/${id}`);  }

  login():Observable<any>{
    return this.https.get(`${this.baseUrl}/auth/login`)
  }
}
