import { CompanyDetailsComponent } from "./../company-details/company-details.component";
import { Observable } from "rxjs";
import { CompanyService } from "../company.service";
import { Company } from "../company";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatPaginator,
  MatSort
} from "@angular/material";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.css"]
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "foundation", "action"];
  companys: MatTableDataSource<Company>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.companys = new MatTableDataSource();
    this.companys.paginator = this.paginator;
    this.companys.sort = this.sort;
    this.getCompanys();
  }

  applyFilter(filterValue: string) {
    this.companys.filter = filterValue.trim().toLowerCase();

    if (this.companys.paginator) {
      this.companys.paginator.firstPage();
    }
  }

  getCompanys() {
    this.companyService.getCompanyList().subscribe(data => {
      console.log(data);
      this.companys.data = data;
      return data;
    });
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  companyDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateCompany(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
