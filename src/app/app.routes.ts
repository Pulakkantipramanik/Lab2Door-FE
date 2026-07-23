import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup';
import { LoginComponent } from './components/login/login';
import { TestListComponent } from './components/test-list/test-list';
import { MyBookingsComponent } from './components/my-bookings/my-bookings';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tests', component: TestListComponent, canActivate: [authGuard] },
  { path: 'my-bookings', component: MyBookingsComponent, canActivate: [authGuard] }
];