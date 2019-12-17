import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EngineService } from '../engine.service';
import { Engine } from '../engine';

@Component({
  selector: 'app-engine-create',
  templateUrl: './engine-create.component.html',
  styleUrls: ['./engine-create.component.css']
})
export class EngineCreateComponent implements OnInit {

  engine: Engine = new Engine();
  submitted = false;
  error = false;

  constructor(private engineService: EngineService,
    private router: Router) { }

  ngOnInit() {
  }

  newEngine(): void {
    this.submitted = false;
    this.engine = new Engine();
  }

  save() {
    this.engineService.createEngine(this.engine).subscribe();
    this.engine = new Engine();
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z1-9 -'].{0,20}$")]),
    power: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9][0-9]$")]),
    capacity: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9][0-9][0-9]$")]),
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
