import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet,ContentComponent, HeaderComponent, NavbarComponent, SidebarComponent, FooterComponent, ContentComponent],

  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
    
}
