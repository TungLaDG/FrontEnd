import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Kiểm tra xem `localStorage` có tồn tại hay không
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        return true;
      }
    }

    // Điều hướng về trang đăng nhập nếu không có token
    this.router.navigate(['/login']);
    return false;
  }
}
