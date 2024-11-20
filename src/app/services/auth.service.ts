import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";


interface LoginRequest {
  userName: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:5184/api/auth'
  constructor(private http: HttpClient) { }

  login(userName: string, password: string):Observable<LoginResponse>{
    const loginRequest: LoginRequest = {userName, password};
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest);
  }
  logout(): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });
    
    return this.http.post<void>(`${this.apiUrl}/logout`, {}, { headers });
  }

  getUserRole(): string | null {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role; // Lấy vai trò từ token
    }
    return null;
  }
  
  isLoggedIn(): boolean {
    const token = localStorage.getItem('accessToken');
    return token !== null; // Kiểm tra xem người dùng đã đăng nhập chưa
  }
}
