import { Component} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ApiService],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  products$!: Observable<any[]>;
  categoryId: string | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();

    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');
      if (this.categoryId) {
        // Lấy sản phẩm theo loại từ API
        this.products$ = this.apiService.getProductsByCategoryId(this.categoryId);
      }
    });
  }

  getProducts(): void {
    this.products$ = this.apiService.getItems().pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return of([]); 
      })
    );
  }
}
