import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { PageResponse, Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})


export class TestService {
  private baseUrl = `${environment.apiUrl}/tests`;

  constructor(private http: HttpClient) {}

  getAllTests(page: number = 0, size: number = 10): Observable<PageResponse<Test>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<PageResponse<Test>>(this.baseUrl, { params });
  }
}