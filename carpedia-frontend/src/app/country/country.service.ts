import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private baseUrl = "http://localhost:8080/country";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Origin': 'http://localhost:8080/simply',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  header = {
    'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Origin': 'http://localhost:8080/simply',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  }

  constructor(private http: HttpClient) {}

  getCountryList(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptions).pipe(
    map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getCountry(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createCountry(Country: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, Country);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${id}`, {
      responseType: "text"
    });
  }

}
