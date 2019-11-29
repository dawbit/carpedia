import { SimplyCarDetailsComponent } from "./../simplycar-details/simplycar-details.component";
import { Observable } from "rxjs";
import { SimplyCarService } from "../simplycar.service";
import { SimplyCar } from "../simplycar";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
//import { filter } from 'rxjs/operators';
//import { map, filter, scan } from "rxjs/operators";
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
  selector: "app-simplycar-list",
  templateUrl: "./simplycar-list.component.html",
  styleUrls: ["./../../table.css"]
})
export class SimplyCarListComponent implements OnInit {
  displayedColumns: string[] = ["id", "company", "model", "action"];
  simplycars: MatTableDataSource<SimplyCar>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private simplycarService: SimplyCarService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.reloadData();
    this.simplycars = new MatTableDataSource();
    this.simplycars.paginator = this.paginator;
    this.simplycars.sort = this.sort;
    this.getCars();
  }

  applyFilter(filterValue: string) {
    this.simplycars.filter = filterValue.trim().toLowerCase();

    if (this.simplycars.paginator) {
      this.simplycars.paginator.firstPage();
    }
  }

  getCars() {
    this.simplycarService.getSimplyCarsList().subscribe(data => {
      console.log(data);
      this.simplycars.data = data;
      return data;
    });
  }

  //   reloadData() {
  //     this.simplycars.data = this.simplycarService.getSimplyCarsList();
  //   }

  deleteSimplyCar(id: number) {
    this.simplycarService.deleteSimplyCar(id).subscribe(
      data => {
        console.log(data);
        //this.reloadData();
      },
      error => console.log(error)
    );
  }

  simplycarDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateSimplyCar(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
