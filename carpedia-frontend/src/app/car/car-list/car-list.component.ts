import { CarDetailsComponent } from "./../car-details/car-details.component";
import { Observable } from "rxjs";
import { CarService } from "../car.service";
import { Car } from "../car";
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
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"]
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "startproduction", "endproduction",
   "ncap", "action"];
  cars: MatTableDataSource<Car>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cars = new MatTableDataSource();
    this.cars.paginator = this.paginator;
    this.cars.sort = this.sort;
    this.getCars();
  }

  applyFilter(filterValue: string) {
    this.cars.filter = filterValue.trim().toLowerCase();

    if (this.cars.paginator) {
      this.cars.paginator.firstPage();
    }
  }

  getCars() {
    this.carService.getCarList().subscribe(data => {
      console.log(data);
      this.cars.data = data;
      return data;
    });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  carDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateCar(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
