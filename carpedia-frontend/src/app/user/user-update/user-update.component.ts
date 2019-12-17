import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: number;
  user: User;

  submitted = false;
  error = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        this.user = data;
      });
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe();
    this.user = new User();
  }

  form = new FormGroup({
    password: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9$@$!%*?&].{6,}$")]),
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
      this.updateUser();   
    }
  }

}
