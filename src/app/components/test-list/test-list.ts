import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test';
import { BookingService } from '../../services/booking.service';
import { Test } from '../../models/test.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './test-list.html',
  styleUrl: './test-list.css'
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];
  selectedTestId: number | null = null;
  slotTime = '';
  address = '';
  message = '';

  constructor(private testService: TestService, private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadTests();
  }

  loadTests(): void {
    this.testService.getAllTests().subscribe({
      next: (response) => this.tests = response.content,
      error: (err) => console.error('Failed to load tests', err)
    });
  }

  bookTest(testId: number): void {
    this.selectedTestId = testId;
    this.message = '';
  }

  confirmBooking(): void {
    if (!this.selectedTestId || !this.slotTime || !this.address) {
      this.message = 'Please fill all fields';
      return;
    }

    this.bookingService.createBooking({
      testId: this.selectedTestId,
      slotTime: this.slotTime,
      address: this.address
    }).subscribe({
      next: () => {
        this.message = 'Booking successful!';
        this.selectedTestId = null;
        this.slotTime = '';
        this.address = '';
      },
      error: (err) => {
        this.message = err.error?.message || 'Booking failed';
      }
    });
  }
}