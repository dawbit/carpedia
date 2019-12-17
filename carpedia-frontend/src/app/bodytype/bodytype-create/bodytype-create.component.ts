import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BodytypeService } from '../bodytype.service';
import { Bodytype } from '../bodytype';

@Component({
  selector: 'app-bodytype-create',
  templateUrl: './bodytype-create.component.html',
  styleUrls: ['./bodytype-create.component.css']
})
export class BodytypeCreateComponent implements OnInit {

  bodytype: Bodytype = new Bodytype();
  submitted = false;
  error = false;

  constructor(private bodytypeService: BodytypeService,
    private router: Router) { }

  ngOnInit() {
  }

  newBodytype(): void {
    this.submitted = false;
    this.bodytype = new Bodytype();
  }

  save() {
    this.bodytypeService.createBodytype(this.bodytype).subscribe();
    this.bodytype = new Bodytype();
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[A-Z][a-zA-Z ].{0,18}$")]),
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
