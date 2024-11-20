import {Router} from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private authService: AuthService,private router: Router){}

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('accessToken'); // Xóa token
        // this.authService.logout(); 
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
