import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from "@angular/material";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Country } from "../../country/country";
import { CountryService } from "../../country/country.service";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  id: number;
  company: Company;
  countries: MatTableDataSource<Country>;

  submitted = false;
  error = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
    private countryService: CountryService
    ) { }

  ngOnInit() {
    this.company = new Company();

    this.id = this.route.snapshot.params['id'];

    this.getCountries();
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  getCountries() {
    this.countryService.getCountryList().subscribe(data => {
      console.log(data);
      this.countries = data;
      return data;
    });
  }

  updateCompany() {
    this.companyService.updateCompany(this.id, this.company)
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,30}$")]),
    foundation: new FormControl('',[Validators.required,Validators.pattern("[1-2][0-9][0-9][0-9]$")]),
    country: new FormControl('',[Validators.required]),
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
      this.updateCompany();   
    }
  }

}
