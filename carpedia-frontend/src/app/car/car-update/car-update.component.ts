import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  id: number;
  car: Car;
  companies: MatTableDataSource<Company>;
  countries: MatTableDataSource<Country>;
  segments: MatTableDataSource<Segment>;
  bodytypes: MatTableDataSource<Bodytype>;

  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private companyService: CompanyService,
    private countryService: CountryService,
    private segmentService: SegmentService,
    private bodytypeService: BodytypeService
    ) { }

  ngOnInit() {
    this.car = new Car();

    this.id = this.route.snapshot.params['id'];

    this.getCompanies();
    this.getCountries();
    this.getSegments();
    this.getBodytypes();
    
    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      }, error => console.log(error));
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

  updateCar() {
    this.carService.updateCar(this.id, this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {
    this.updateCar();    
  }

  gotoList() {
    this.router.navigate(['car']);
  }
}
