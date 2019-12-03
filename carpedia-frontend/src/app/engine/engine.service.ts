import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EngineService {
  private baseUrlEngine = "http://localhost:8080/engine";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) {}

  getEngineList(): Observable<any> {
    return this.http.get(this.baseUrlEngine, this.httpOptions).pipe(
    map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getEngine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlEngine}/id/${id}`);
  }

  createEngine(Engine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlEngine}/save`, Engine);
  }

  updateEngine(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlEngine}/update`, value);
  }

  deleteEngine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlEngine}/delete?id=${id}`, {
      responseType: "text"
    });
  }

}
