import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BodytypeService {
  private baseUrlBodytype = "http://localhost:8080/bodytype";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) {}

  getBodytypeList(): Observable<any> {
    return this.http.get(this.baseUrlBodytype, this.httpOptions).pipe(
    map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getBodytype(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlBodytype}/id/${id}`);
  }

  createBodytype(Bodytype: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlBodytype}/save`, Bodytype);
  }

  updateBodytype(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlBodytype}/update`, value);
  }

  deleteBodytype(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlBodytype}/delete?id=${id}`, {
      responseType: "text"
    });
  }

}
