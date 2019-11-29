import { CountryService } from '../country.service';
import { Country } from '../country';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {

  country: Country = new Country();
  submitted = false;

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit() {
  }

  newCountry(): void {
    this.submitted = false;
    this.country = new Country();
  }

  save() {
    this.countryService.createCountry(this.country)
      .subscribe(data => console.log(data), error => console.log(error));
    this.country = new Country();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
