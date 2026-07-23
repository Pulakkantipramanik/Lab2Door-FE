import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = '';
    this.authService.signup({ name: this.name, email: this.email, password: this.password })
      .subscribe({
        next: () => {
          alert('Signup successful! Please login.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Signup failed. Please check your details.';
        }
      });
  }
}