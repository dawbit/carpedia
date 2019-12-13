import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  id: number;
  company: Company;

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.company = new Company();

    this.id = this.route.snapshot.params['id'];
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['company']);
  }
}
