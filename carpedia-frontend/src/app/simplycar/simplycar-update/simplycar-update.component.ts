import { Component, OnInit } from '@angular/core';
import { SimplyCar } from '../simplycar';
import { ActivatedRoute, Router } from '@angular/router';
import { SimplyCarService } from '../simplycar.service';

@Component({
  selector: 'app-simplycar-update',
  templateUrl: './simplycar-update.component.html',
  styleUrls: ['./simplycar-update.component.css']
})
export class SimplyCarUpdateComponent implements OnInit {

  id: number;
  simplycar: SimplyCar;

  constructor(private route: ActivatedRoute,private router: Router,
    private simplycarService: SimplyCarService) { }

  ngOnInit() {
    this.simplycar = new SimplyCar();

    this.id = this.route.snapshot.params['id'];
    
    this.simplycarService.getSimplyCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.simplycar = data;
      }, error => console.log(error));
  }

  updateSimplyCar() {
    this.simplycarService.updateSimplyCar(this.id, this.simplycar)
      .subscribe(data => console.log(data), error => console.log(error));
    this.simplycar = new SimplyCar();
    this.gotoList();
  }

  onSubmit() {
    this.updateSimplyCar();    
  }

  gotoList() {
    this.router.navigate(['simplycar']);
  }
}
