import { CompanyService } from "../company.service";
import { Company } from "../company";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CountryDetailsComponent } from "./../../country/country-details/country-details.component";
import { Observable } from "rxjs";
import { CountryService } from "../../country/country.service";
import { Country } from "../../country/country";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-company-create",
  templateUrl: "./company-create.component.html",
  styleUrls: ["./company-create.component.css"]
})
export class CompanyCreateComponent implements OnInit {
  company: Company = new Company();
  //countries: Country[];
  countries: MatTableDataSource<Country>;
  submitted = false;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    //this.countrys = new MatTableDataSource();
    this.getCountrys();
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  getCountrys() {
    this.countryService.getCountryList().subscribe(data => {
      console.log(data);
      this.countries = data;
      return data;
    });
  }

  save() {
    this.companyService.createCompany(this.company).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.company = new Company();
    console.log(this.companyService.createCompany(this.company));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
