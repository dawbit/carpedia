import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CarService {
  private baseUrlCar = "http://localhost:8080/car";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) {}

  getCarList(): Observable<any> {
    return this.http.get(this.baseUrlCar, this.httpOptions).pipe(
    map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlCar}/id/${id}`);
  }

  createCar(Car: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlCar}/save`, Car);
  }

  updateCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlCar}/update`, value);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlCar}/delete?id=${id}`, {
      responseType: "text"
    });
  }

  getCarByModel(name: string): Observable<any> {
    return this.http.get(`${this.baseUrlCar}/name/${name}`, this.httpOptions);
  }

}
