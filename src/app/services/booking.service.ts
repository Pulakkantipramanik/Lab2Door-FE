import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Booking, BookingRequest } from '../models/booking.model';
import { PageResponse } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = `${environment.apiUrl}/bookings`;

  constructor(private http: HttpClient) {}

  createBooking(request: BookingRequest): Observable<Booking> {
    return this.http.post<Booking>(this.baseUrl, request);
  }

  getMyBookings(page: number = 0, size: number = 10): Observable<PageResponse<Booking>> {
    return this.http.get<PageResponse<Booking>>(`${this.baseUrl}/my`, {
      params: { page: page.toString(), size: size.toString() }
    });
  }

  cancelBooking(id: number): Observable<Booking> {
    return this.http.patch<Booking>(`${this.baseUrl}/${id}/cancel`, {});
  }
}