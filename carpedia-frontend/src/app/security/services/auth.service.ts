import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from '../config';
import { Token } from '../models/token';
import { MatSnackBar } from '@angular/material';
import { error } from 'util';
import { UserService } from '../../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient,
              private userService: UserService,
              private _snackBar: MatSnackBar) {}

  private messageRole = new BehaviorSubject<boolean>(true);
  currentMessageRole = this.messageRole.asObservable();

  private messageLogged = new BehaviorSubject<boolean>(false);
  currentMessageLogged = this.messageLogged.asObservable();

  private messageLoggedUser = new BehaviorSubject<string>("");
  currentMessageLoggedUser = this.messageLoggedUser.asObservable();

  snackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${config.apiUrl}/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          this.snackBar('User is not authenticated. Contact with administrator.', 'OK');
          return of(false);
        }));
  }

  logout() {
    this.http.get<any>(`http://localhost:4200/login`);
  }

  isLoggedIn() {
    return this.messageLogged.value;
  }

  refreshToken() {
    return this.http.post<any>(`${config.apiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Token) => {
      this.storeJwtTokenRole(tokens.jwt);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(login: string, tokens: Token) {
    this.messageRole.next(tokens.role);
    this.messageLogged.next(true);
    this.messageLoggedUser.next( login );
    this.loggedUser = login;
    this.storeTokens(tokens);
  }

  doLogoutUser() {
    this.loggedUser = null;
    this.messageLogged.next(false);
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtTokenRole(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
