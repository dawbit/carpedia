import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
  error = false;

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
        this.car = data;
      });
  }

  getCompanies() {
    this.companyService.getCompanyList().subscribe(data => {
      this.companies = data;
      return data;
    });
  }

  getCountries() {
    this.countryService.getCountryList().subscribe(data => {
      this.countries = data;
      return data;
    });
  }

  getSegments() {
    this.segmentService.getSegmentList().subscribe(data => {
      this.segments = data;
      return data;
    });
  }

  getBodytypes() {
    this.bodytypeService.getBodytypeList().subscribe(data => {
      this.bodytypes = data;
      return data;
    });
  }

  updateCar() {
    this.carService.updateCar(this.id, this.car)
      .subscribe();
    this.car = new Car();
  }

  form = new FormGroup({
    company: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9 ].{0,30}$")]),
    startproduction: new FormControl('',[Validators.required,Validators.pattern("[1-2][0-9][0-9][0-9]$")]),
    endproduction: new FormControl('',[Validators.required,Validators.pattern("[1-2][0-9][0-9][0-9]$")]),
    ncap: new FormControl('',[Validators.required,Validators.pattern("[0-5]$")]),
    country: new FormControl('',[Validators.required]),
    segment: new FormControl('',[Validators.required]),
    bodytype: new FormControl('',[Validators.required]),
  });

  validError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if(this.form.invalid){
      this.error = true;
      return;
    }
    else{
      this.error = false;
      this.submitted = true;
      this.updateCar();   
    }
  }

}
