import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './security/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carpedia';
  isAdmin: boolean = false;
  isLogged: boolean = false;
  isNotLogged: boolean = !this.isLogged;

  constructor(private authService: AuthService,
    private router: Router){}

  ngOnInit(){
    this.authService.currentMessageRole.subscribe(message => this.isAdmin = message);
    this.authService.currentMessageLogged.subscribe(message => this.isLogged = message);
    this.authService.currentMessageLogged.subscribe(message => this.isNotLogged = !message);
  }

  logout() {
    this.router.navigate(['/homepage']);
    this.authService.doLogoutUser();
    this.isAdmin = false;
  }
}
