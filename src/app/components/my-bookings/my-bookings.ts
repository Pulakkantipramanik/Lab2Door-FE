import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css'
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  message = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getMyBookings().subscribe({
      next: (response) => this.bookings = response.content,
      error: (err) => console.error('Failed to load bookings', err)
    });
  }

  cancel(id: number): void {
    this.bookingService.cancelBooking(id).subscribe({
      next: () => {
        this.message = 'Booking cancelled';
        this.loadBookings();   // list refresh koro
      },
      error: (err) => {
        this.message = err.error?.message || 'Cancel failed';
      }
    });
  }
}