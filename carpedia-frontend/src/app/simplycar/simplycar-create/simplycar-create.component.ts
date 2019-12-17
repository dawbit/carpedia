import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SimplyCarService } from '../simplycar.service';
import { SimplyCar } from '../simplycar';

@Component({
  selector: 'app-simplycar-create',
  templateUrl: './simplycar-create.component.html',
  styleUrls: ['./simplycar-create.component.css']
})
export class SimplyCarCreateComponent implements OnInit {

  simplycar: SimplyCar = new SimplyCar();
  submitted = false;
  error = false;

  constructor(private simplycarService: SimplyCarService,
    private router: Router) { }

  ngOnInit() {
    
  }

  newSimplyCar(): void {
    this.submitted = false;
    this.simplycar = new SimplyCar();
  }

  save() {
    this.simplycarService.createSimplyCar(this.simplycar).subscribe();
    this.simplycar = new SimplyCar();
  }

  //for tests
  form = new FormGroup({
    company: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,30}$")]),
    model: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,30}$")]),
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
