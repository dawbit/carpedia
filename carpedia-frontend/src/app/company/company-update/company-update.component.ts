import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { MatTableDataSource } from "@angular/material";
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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
    private countryService: CountryService
    ) { }

  ngOnInit() {
    this.company = new Company();

    this.id = this.route.snapshot.params['id'];

    this.getCountrys();
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  getCountrys() {
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
    this.gotoList();
  }

  onSubmit() {
    this.updateCompany();    
  }

  gotoList() {
    this.router.navigate(['company']);
  }
}
