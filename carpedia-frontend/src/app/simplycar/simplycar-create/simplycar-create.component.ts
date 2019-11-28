import { SimplyCarService } from '../simplycar.service';
import { SimplyCar } from '../simplycar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simplycar-create',
  templateUrl: './simplycar-create.component.html',
  styleUrls: ['./simplycar-create.component.css']
})
export class CreateSimplyCarComponent implements OnInit {

  simplycar: SimplyCar = new SimplyCar();
  submitted = false;

  constructor(private simplycarService: SimplyCarService,
    private router: Router) { }

  ngOnInit() {
  }

  newSimplyCar(): void {
    this.submitted = false;
    this.simplycar = new SimplyCar();
  }

  save() {
    this.simplycarService.createSimplyCar(this.simplycar)
      .subscribe(data => console.log(data), error => console.log(error));
    this.simplycar = new SimplyCar();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
