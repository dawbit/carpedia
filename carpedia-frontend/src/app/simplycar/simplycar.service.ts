import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimplyCarService {

 private baseUrl = 'http://localhost:8080/simply';

  constructor(private http: HttpClient) { }

  getSimplyCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createSimplyCar(simplycar: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, simplycar);
  }

  updateSimplyCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, value);
  }

  // updateSimplyCar(simplycar: Object): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/update`, simplycar);
  // }

  deleteSimplyCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${id}`, { responseType: 'text' });
  }

  getSimplyCarsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
