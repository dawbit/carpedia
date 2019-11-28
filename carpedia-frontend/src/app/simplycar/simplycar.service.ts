import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SimplyCar } from "./simplycar";

@Injectable({
  providedIn: "root"
})
export class SimplyCarService {
  private baseUrl = "http://localhost:8080/simply";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getSimplyCarsList(): Observable<SimplyCar[]> {
    return this.http.get(this.baseUrl, this.httpOptions).pipe(
    map(res => SimplyCar[]));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getSimplyCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createSimplyCar(simplycar: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, simplycar);
  }

  updateSimplyCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, value);
  }

  deleteSimplyCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${id}`, {
      responseType: "text"
    });
  }

  getSimplyCarByModel(model: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/model/${model}`);
  }
}
