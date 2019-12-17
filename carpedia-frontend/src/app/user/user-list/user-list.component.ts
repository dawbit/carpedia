import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ["id", "login", "fname", "lname", "ismod", "isactive", "action"];
  users: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.users = new MatTableDataSource();
    this.users.paginator = this.paginator;
    this.users.sort = this.sort;
    this.getUsers();
  }

  applyFilter(filterValue: string) {
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  getUsers() {
    this.userService.getUserList().subscribe(data => {
      this.users.data = data;
      return data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

  userDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateUser(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
