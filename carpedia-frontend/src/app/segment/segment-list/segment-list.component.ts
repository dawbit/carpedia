import { SegmentDetailsComponent } from "./../segment-details/segment-details.component";
import { Observable } from "rxjs";
import { SegmentService } from "../segment.service";
import { Segment } from "../segment";
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
  selector: "app-segment-list",
  templateUrl: "./segment-list.component.html",
  styleUrls: ["./../../table.css"]
})
export class SegmentListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "action"];
  segments: MatTableDataSource<Segment>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private segmentService: SegmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.segments = new MatTableDataSource();
    this.segments.paginator = this.paginator;
    this.segments.sort = this.sort;
    this.getSegments();
  }

  applyFilter(filterValue: string) {
    this.segments.filter = filterValue.trim().toLowerCase();

    if (this.segments.paginator) {
      this.segments.paginator.firstPage();
    }
  }

  getSegments() {
    this.segmentService.getSegmentList().subscribe(data => {
      console.log(data);
      this.segments.data = data;
      return data;
    });
  }

  deleteSegment(id: number) {
    this.segmentService.deleteSegment(id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  segmentDetails(id: number) {
    this.router.navigate([this.router.url + "/details", id]);
  }

  updateSegment(id: number) {
    this.router.navigate([this.router.url + "/update", id]);
  }
}
