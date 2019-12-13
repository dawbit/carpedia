import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Engine } from '../engine';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-engine-update',
  templateUrl: './engine-update.component.html',
  styleUrls: ['./engine-update.component.css']
})
export class EngineUpdateComponent implements OnInit {

  id: number;
  engine: Engine;

  submitted = false;
  error = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private engineService: EngineService) { }

  ngOnInit() {
    this.engine = new Engine();

    this.id = this.route.snapshot.params['id'];
    
    this.engineService.getEngine(this.id)
      .subscribe(data => {
        console.log(data)
        this.engine = data;
      }, error => console.log(error));
  }

  updateEngine() {
    this.engineService.updateEngine(this.id, this.engine)
      .subscribe(data => console.log(data), error => console.log(error));
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
      this.updateEngine();   
    }
  }

}
