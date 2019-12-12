import { UserService } from '../user.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  submitted = false;
  error = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  form = new FormGroup({
    login: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,20}$")]),
    password: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 !@#$%^&*()_+-=[]{};',./<>?].{0,30}$")]),
    fname: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,20}$")]),
    lname: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,20}$")]),
  });

  validError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if(this.form.invalid){
      this.error = true;
      return;
    }
    else{
      this.error = false;
      this.submitted = true;
      this.save();   
    }
  }
  
}