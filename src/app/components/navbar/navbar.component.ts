import { ApiService } from './../../services/api.service';
import { Component,ElementRef,HostListener, ViewChild  } from '@angular/core';
// import { Router } from 'express';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[ApiService]
})

export class NavbarComponent {
  categories: any[]=[];
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;

  constructor(private apiService : ApiService, private router: Router){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
          if (window.pageYOffset > 0) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      }
  }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error fetching categories:', err)
    });
  }

  filterProductsByCategory(categoryId: string):void{
    this.router.navigate(['/products/category/',categoryId]);
    this.closeNavbar();
  }
  closeNavbar() {
    if (this.navbarCollapse) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }
}
