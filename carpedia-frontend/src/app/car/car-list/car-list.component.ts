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
import { AuthService } from '../../security/services/auth.service';

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"]
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "startproduction", "endproduction",
   "ncap", "action"];
  dataSource: MatTableDataSource<Car>;
  cars: Car[];
  loading = true;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private carService: CarService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.reloadData();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.authService.currentMessageRole.subscribe(message => this.isAdmin = message);
  }

  reloadData() {
    this.loading = true;
    this.getCars();
    this.loading = false;
  }

  Filter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ModelFilter(filter: string) {
    this.loading = true;
    this.carService.getCarByModel(filter).subscribe(
      data => {
        this.refreshDataSource(data);
        this.loading = false;
      }
    )

      if(filter==''){
        this.reloadData();
      };

  }

  StartProductionFilter(filter: string) {
    this.loading = true;
    this.carService.getCarByStartProduction(filter).subscribe(
      data => {
        this.refreshDataSource(data);
        this.loading = false;
      }
    )

      if(filter==''){
        this.reloadData();
      };
      
  }

  EndProductionFilter(filter: string) {
    this.loading = true;
    this.carService.getCarByEndProduction(filter).subscribe(
      data => {
        this.refreshDataSource(data);
        this.loading = false;
      }
    )

      if(filter==''){
        this.reloadData();
      };
      
  }

  NcapFilter(filter: number) {
    this.loading = true;
    this.carService.getCarByNcap(filter).subscribe(
      data => {
        this.refreshDataSource(data);
        this.loading = false;
      }
    )

      if(filter==0){
        this.reloadData();
      };
      
  }

  refreshDataSource(data: Car[]) {
    this.cars = data;
    this.dataSource = new MatTableDataSource<Car>(this.cars);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCars() {
    this.carService.getCarList().subscribe(
      data => {
        this.loading = true;
        console.log(data);
        this.dataSource.data = data;
        this.loading = false;
        return data;
    });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
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
