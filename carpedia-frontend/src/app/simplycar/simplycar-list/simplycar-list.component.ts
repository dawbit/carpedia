import { SimplyCarDetailsComponent } from './../simplycar-details/simplycar-details.component';
import { Observable } from "rxjs";
import { SimplyCarService } from "../simplycar.service";
import { SimplyCar } from "../simplycar";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { filter } from 'rxjs/operators';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: "app-simplycar-list",
  templateUrl: "./simplycar-list.component.html",
  styleUrls: ["./simplycar-list.component.css"]
})

export class SimplyCarListComponent implements OnInit {
  //simplycars: Observable<SimplyCar[]>;
  simplycars: Observable<SimplyCar>;
  //simplycars = new MatTableDataSource(Observable<SimplyCar[]>);

  // applyFilter(filterValue: string) {
  //   this.simplycars.filter = filterValue.trim().toLowerCase();
  // }
  
  constructor(private simplycarService: SimplyCarService,
    private router: Router) {}

    displayedColumns: string[] = ['id', 'company', 'model', 'action'];

    
  ngOnInit() {
    this.reloadData();
    // this.simplycars = new MatTableDataSource(); // create new object
    // this.simplycars.paginator = this.paginator;
    // this.simplycars.sort = this.sort;

  }

  reloadData() {
    this.simplycars = this.simplycarService.getSimplyCarsList();
  }

  deleteSimplyCar(id: number) {
    this.simplycarService.deleteSimplyCar(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  simplycarDetails(id: number){
    this.router.navigate([this.router.url + '/details', id]);
  }

  updateSimplyCar(id: number){
    this.router.navigate([this.router.url + '/update', id]);
  }
}
