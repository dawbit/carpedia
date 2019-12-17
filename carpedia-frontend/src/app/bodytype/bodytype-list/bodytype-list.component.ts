import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { BodytypeService } from "../bodytype.service";
import { Bodytype } from "../bodytype";
import { AuthService } from '../../security/services/auth.service';

@Component({
  selector: "app-bodytype-list",
  templateUrl: "./bodytype-list.component.html",
  styleUrls: ["./../../table.css"]
})
export class BodytypeListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "action"];
  bodytypes: MatTableDataSource<Bodytype>;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private bodytypeService: BodytypeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.bodytypes = new MatTableDataSource();
    this.bodytypes.paginator = this.paginator;
    this.bodytypes.sort = this.sort;
    this.getBodytypes();
    this.authService.currentRole.subscribe(message => this.isAdmin = message);
  }

  applyFilter(filterValue: string) {
    this.bodytypes.filter = filterValue.trim().toLowerCase();

    if (this.bodytypes.paginator) {
      this.bodytypes.paginator.firstPage();
    }
  }

  getBodytypes() {
    this.bodytypeService.getBodytypeList().subscribe(data => {
      this.bodytypes.data = data;
      return data;
    });
  }

  deleteBodytype(id: number) {
    this.bodytypeService.deleteBodytype(id).subscribe();
  }

  bodytypeDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateBodytype(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
