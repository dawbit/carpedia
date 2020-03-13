import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.css']
})
export class CountryUpdateComponent implements OnInit {

  id: number;
  country: Country;

  submitted = false;
  error = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private countryService: CountryService) { }

  ngOnInit() {
    this.country = new Country();

    this.id = this.route.snapshot.params['id'];
    
    this.countryService.getCountry(this.id)
      .subscribe(data => {
        this.country = data;
      });
  }

  updateCountry() {
    this.countryService.updateCountry(this.id, this.country)
      .subscribe();
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
      this.updateCountry();   
    }
  }

}
