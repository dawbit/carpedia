import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimplyCar } from '../simplycar';
import { SimplyCarService } from '../simplycar.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-simplycar-update',
  templateUrl: './simplycar-update.component.html',
  styleUrls: ['./simplycar-update.component.css']
})
export class SimplyCarUpdateComponent implements OnInit {

  id: number;
  simplycar: SimplyCar;
  submitted = false;
  error = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private simplycarService: SimplyCarService) { }

  ngOnInit() {
    this.simplycar = new SimplyCar();

    this.id = this.route.snapshot.params['id'];
    
    this.simplycarService.getSimplyCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.simplycar = data;
      }, error => console.log(error));
  }

  updateSimplyCar() {
    this.simplycarService.updateSimplyCar(this.id, this.simplycar)
      .subscribe(data => console.log(data), error => console.log(error));
    this.simplycar = new SimplyCar();
    this.gotoList();
  }

  onSubmit() {
    if(this.form.invalid){
      this.error = true;
      return;
    }
    else{
      this.error = false;
      this.submitted = true;
      this.updateSimplyCar();   
    }
  }

  //for tests
  form = new FormGroup({
    company: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,30}$")]),
    model: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,30}$")]),
  });

  validError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  gotoList() {
    this.router.navigate(['simplycar']);
  }
}
