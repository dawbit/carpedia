import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { SimplyCarService } from "../simplycar.service";
import { SimplyCar } from "../simplycar";
import { AuthService } from '../../security/services/auth.service';

@Component({
  selector: "app-simplycar-list",
  templateUrl: "./simplycar-list.component.html",
  styleUrls: ["./../../table.css"]
})
export class SimplyCarListComponent implements OnInit {
  displayedColumns: string[] = ["id", "company", "model", "action"];
  simplycars: MatTableDataSource<SimplyCar>;
  simply: SimplyCar[];
  loading = true;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private simplycarService: SimplyCarService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.reloadData();
    this.simplycars = new MatTableDataSource();
    this.simplycars.paginator = this.paginator;
    this.simplycars.sort = this.sort;
    //this.getCars();
    this.authService.currentRole.subscribe(message => this.isAdmin = message);
  }

  applyFilter(filterValue: string) {
    this.simplycars.filter = filterValue.trim().toLowerCase();

    if (this.simplycars.paginator) {
      this.simplycars.paginator.firstPage();
    }
  }

  applyModelFilter(filter: string) {
    this.loading = true;
    this.simplycarService.getSimplyCarByModel(filter).subscribe(
      (data) => {
        this.refreshDataSource(data);
        this.loading = false;
      })
      if(filter==''){
        this.reloadData();
      };
  }

  refreshDataSource(data: SimplyCar[]) {
    this.ngOnInit;
    this.simply = data;
    this.simplycars = new MatTableDataSource<SimplyCar>(this.simply);
    this.simplycars.paginator = this.paginator;
    this.simplycars.sort = this.sort;
  }

  getCars() {
    this.simplycarService.getSimplyCarsList().subscribe(data => {
      this.loading = true;
      this.simplycars.data = data;
      this.loading = false;
      return data;
    });
  }

  reloadData() {
    this.loading = true;
    this.getCars();
    this.loading = false;
  }

  deleteSimplyCar(id: number) {
    this.simplycarService.deleteSimplyCar(id).subscribe(
      data => {
        this.reloadData();
      }
    );
  }

  simplycarDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateSimplyCar(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
