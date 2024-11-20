import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';
  Router: any;

  constructor(private authService: AuthService,private router: Router) {}

  onLogin() {
    this.authService.login(this.userName, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        alert('Login successful!');
        
        this.router.navigate(['/admin']); 
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }

}
