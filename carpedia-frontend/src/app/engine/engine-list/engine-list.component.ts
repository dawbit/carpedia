import { EngineDetailsComponent } from "./../engine-details/engine-details.component";
import { Observable } from "rxjs";
import { EngineService } from "../engine.service";
import { Engine } from "../engine";
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
  selector: "app-engine-list",
  templateUrl: "./engine-list.component.html",
  styleUrls: ["./engine-list.component.css"]
})
export class EngineListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "power", "capacity", "action"];
  engines: MatTableDataSource<Engine>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private engineService: EngineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.engines = new MatTableDataSource();
    this.engines.paginator = this.paginator;
    this.engines.sort = this.sort;
    this.getEngines();
  }

  applyFilter(filterValue: string) {
    this.engines.filter = filterValue.trim().toLowerCase();

    if (this.engines.paginator) {
      this.engines.paginator.firstPage();
    }
  }

  getEngines() {
    this.engineService.getEngineList().subscribe(data => {
      console.log(data);
      this.engines.data = data;
      return data;
    });
  }

  deleteEngine(id: number) {
    this.engineService.deleteEngine(id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  engineDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateEngine(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
