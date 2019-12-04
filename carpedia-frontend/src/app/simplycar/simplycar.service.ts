import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) {}

  getSimplyCarsList(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptions).pipe(
    map(this.extractData));
  }

  // getSimplyCarsList(pageIndex: number =1, pageSize: number): Observable<any> {
  //   return this.http.get(this.baseUrl, {
  //     params: new HttpParams()
  //       .set('pageIndex', pageIndex.toString())
  //       .set('pageSize', pageSize.toString())}).pipe(
  //   map(this.extractData));
  // }

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
    //return this.http.get(`${this.baseUrl}/model/${model}`);
    return this.http.get(`${this.baseUrl}/model/${model}`, this.httpOptions);
  }
}
