import { SegmentService } from "../segment.service";
import { Segment } from "../segment";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { AuthService } from '../../security/services/auth.service';

@Component({
  selector: "app-segment-list",
  templateUrl: "./segment-list.component.html",
  styleUrls: ["./../../table.css"]
})
export class SegmentListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "action"];
  segments: MatTableDataSource<Segment>;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private segmentService: SegmentService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.segments = new MatTableDataSource();
    this.segments.paginator = this.paginator;
    this.segments.sort = this.sort;
    this.getSegments();
    this.authService.currentRole.subscribe(message => this.isAdmin = message);
  }

  applyFilter(filterValue: string) {
    this.segments.filter = filterValue.trim().toLowerCase();

    if (this.segments.paginator) {
      this.segments.paginator.firstPage();
    }
  }

  getSegments() {
    this.segmentService.getSegmentList().subscribe(data => {
      this.segments.data = data;
      return data;
    });
  }

  deleteSegment(id: number) {
    this.segmentService.deleteSegment(id).subscribe();
  }

  segmentDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateSegment(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
