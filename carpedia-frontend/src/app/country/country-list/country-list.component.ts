import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { CountryService } from "../country.service";
import { Country } from "../country";
import { AuthService } from '../../security/services/auth.service';

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.css"]
})
export class CountryListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "action"];
  countries: MatTableDataSource<Country>;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private countryService: CountryService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.countries = new MatTableDataSource();
    this.countries.paginator = this.paginator;
    this.countries.sort = this.sort;
    this.getCountrys();
    this.authService.currentRole.subscribe(message => this.isAdmin = message);
  }

  applyFilter(filterValue: string) {
    this.countries.filter = filterValue.trim().toLowerCase();

    if (this.countries.paginator) {
      this.countries.paginator.firstPage();
    }
  }

  getCountrys() {
    this.countryService.getCountryList().subscribe(data => {
      console.log(data);
      this.countries.data = data;
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
