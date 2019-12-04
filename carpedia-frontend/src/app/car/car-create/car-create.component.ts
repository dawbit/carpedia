import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { CarService } from "../car.service";
import { Car } from "../car";
import { CountryService } from "../../country/country.service";
import { Country } from "../../country/country";
import { CompanyService } from "../../company/company.service";
import { Company } from "../../company/company";
import { SegmentService } from "../../segment/segment.service";
import { Segment } from "../../segment/segment";
import { BodytypeService } from "../../bodytype/bodytype.service";
import { Bodytype } from "../../bodytype/bodytype";

@Component({
  selector: "app-car-create",
  templateUrl: "./car-create.component.html",
  styleUrls: ["./car-create.component.css"]
})
export class CarCreateComponent implements OnInit {
  car: Car = new Car();
  //countries: Country[];
  companies: MatTableDataSource<Company>;
  countries: MatTableDataSource<Country>;
  segments: MatTableDataSource<Segment>;
  bodytypes: MatTableDataSource<Bodytype>;

  submitted = false;

  constructor(
    private carService: CarService,
    private router: Router,
    private companyService: CompanyService,
    private countryService: CountryService,
    private segmentService: SegmentService,
    private bodytypeService: BodytypeService
  ) {}

  ngOnInit() {
    this.getCompanies();
    this.getCountries();
    this.getSegments();
    this.getBodytypes();
  }

  newCar(): void {
    this.submitted = false;
    this.car = new Car();
  }

  getCompanies() {
    this.companyService.getCompanyList().subscribe(data => {
      console.log(data);
      this.companies = data;
      return data;
    });
  }

  getCountries() {
    this.countryService.getCountryList().subscribe(data => {
      console.log(data);
      this.countries = data;
      return data;
    });
  }

  getSegments() {
    this.segmentService.getSegmentList().subscribe(data => {
      console.log(data);
      this.segments = data;
      return data;
    });
  }

  getBodytypes() {
    this.bodytypeService.getBodytypeList().subscribe(data => {
      console.log(data);
      this.bodytypes = data;
      return data;
    });
  }

  save() {
    this.carService.createCar(this.car).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.car = new Car();
    console.log(this.carService.createCar(this.car));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
