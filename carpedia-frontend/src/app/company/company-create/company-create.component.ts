import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  company: Company = new Company();

  submitted = false;

  constructor(private companyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }


  save() {
    this.companyService.createCompany(this.company)
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
    console.log(this.companyService.createCompany(this.company));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
