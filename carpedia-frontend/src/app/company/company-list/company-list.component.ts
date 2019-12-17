import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { Company } from "../company";
import { CompanyService } from "../company.service";
import { AuthService } from '../../security/services/auth.service';

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.css"]
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "foundation", "action"];
  companies: MatTableDataSource<Company>;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.companies = new MatTableDataSource();
    this.companies.paginator = this.paginator;
    this.companies.sort = this.sort;
    this.getCompanys();
    this.authService.currentRole.subscribe(message => this.isAdmin = message);
  }

  applyFilter(filterValue: string) {
    this.companies.filter = filterValue.trim().toLowerCase();

    if (this.companies.paginator) {
      this.companies.paginator.firstPage();
    }
  }

  getCompanys() {
    this.companyService.getCompanyList().subscribe(data => {
      this.companies.data = data;
      return data;
    });
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe();
  }

  companyDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateCompany(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
