import { SimplyCarDetailsComponent } from './../simplycar-details/simplycar-details.component';
import { Observable } from "rxjs";
import { SimplyCarService } from "../simplycar.service";
import { SimplyCar } from "../simplycar";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-simplycar-list",
  templateUrl: "./simplycar-list.component.html",
  styleUrls: ["./simplycar-list.component.css"]
})
export class SimplyCarListComponent implements OnInit {
  simplycars: Observable<SimplyCar[]>;

  constructor(private simplycarService: SimplyCarService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
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
