import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SimplyCar } from '../simplycar';
import { SimplyCarService } from '../simplycar.service';

@Component({
  selector: 'app-simplycar-details',
  templateUrl: './simplycar-details.component.html',
  styleUrls: ['./simplycar-details.component.css']
})
export class SimplyCarDetailsComponent implements OnInit {

  id: number;
  simplycar: SimplyCar;

  constructor(private route: ActivatedRoute,private router: Router,
    private simplycarService: SimplyCarService) { }

  ngOnInit() {
    this.simplycar = new SimplyCar();

    this.id = this.route.snapshot.params['id'];
    
    this.simplycarService.getSimplyCar(this.id)
      .subscribe(data => {
        this.simplycar = data;
      });
  }

  list(){
    this.router.navigate(['simplycar']);
  }
}
