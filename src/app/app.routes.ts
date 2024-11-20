
import { CustomerComponent } from './components/customer/customer.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/customer', pathMatch: 'full' },
    { path: 'customer', component: CustomerComponent },
    {path:'products/category/:categoryId', component: CustomerComponent},
    {path:'login', component: LoginComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

//,canActivate: [AuthGuard], data: { role: 'admin' }