import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  private baseUrlCompany = "http://localhost:8080/company";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) {}

  getCompanyList(): Observable<any> {
    return this.http.get(this.baseUrlCompany, this.httpOptions).pipe(
    map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlCompany}/id/${id}`);
  }

  createCompany(Company: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlCompany}/save`, Company);
  }

  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlCompany}/update`, value);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlCompany}/delete?id=${id}`, {
      responseType: "text"
    });
  }

}
