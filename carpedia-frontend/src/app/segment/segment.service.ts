import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SegmentService {
  private baseUrlSegment = "http://localhost:8080/segment";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) {}

  getSegmentList(): Observable<any> {
    return this.http.get(this.baseUrlSegment, this.httpOptions).pipe(
    map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  getSegment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlSegment}/id/${id}`);
  }

  createSegment(Segment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlSegment}/save`, Segment);
  }

  updateSegment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlSegment}/update`, value);
  }

  deleteSegment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlSegment}/delete?id=${id}`, {
      responseType: "text"
    });
  }

}
