import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {

  country: Country = new Country();
  submitted = false;
  error = false;

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit() {
  }

  newCountry(): void {
    this.submitted = false;
    this.country = new Country();
  }

  save() {
    this.countryService.createCountry(this.country).subscribe();
    this.country = new Country();
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z -'].{0,30}$")]),
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
