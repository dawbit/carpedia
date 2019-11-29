import { CountryDetailsComponent } from "./../country-details/country-details.component";
import { Observable } from "rxjs";
import { CountryService } from "../country.service";
import { Country } from "../country";
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
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./../../table.css"]
})
export class CountryListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "action"];
  countrys: MatTableDataSource<Country>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.countrys = new MatTableDataSource();
    this.countrys.paginator = this.paginator;
    this.countrys.sort = this.sort;
    this.getCountrys();
  }

  applyFilter(filterValue: string) {
    this.countrys.filter = filterValue.trim().toLowerCase();

    if (this.countrys.paginator) {
      this.countrys.paginator.firstPage();
    }
  }

  getCountrys() {
    this.countryService.getCountryList().subscribe(data => {
      console.log(data);
      this.countrys.data = data;
      return data;
    });
  }

  deleteCountry(id: number) {
    this.countryService.deleteCountry(id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  countryDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateCountry(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
