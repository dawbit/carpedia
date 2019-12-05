import { UserDetailsComponent } from "./../user-details/user-details.component";
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { User } from "../user";
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
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  //displayedColumns: string[] = ["id", "login", "fname", "lname", "ismod", "isactive"];
  displayedColumns: string[] = ["id"];
  dataSource: MatTableDataSource<User>;
  users: User[];
  loading = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  reloadData() {
    this.loading = true;
    this.getUsers();
    this.loading = false;
  }

  Filter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refreshDataSource(data: User[]) {
    this.users = data;
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.userService.getUserList().subscribe(
      data => {
        this.loading = true;
        console.log(data);
        this.dataSource.data = data;
        this.loading = false;
        return data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  userDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateUser(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
