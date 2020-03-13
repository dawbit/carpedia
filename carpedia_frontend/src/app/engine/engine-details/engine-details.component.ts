import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Engine } from '../engine';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-engine-details',
  templateUrl: './engine-details.component.html',
  styleUrls: ['./engine-details.component.css']
})
export class EngineDetailsComponent implements OnInit {

  id: number;
  engine: Engine;

  constructor(private route: ActivatedRoute,private router: Router,
    private engineService: EngineService) { }

  ngOnInit() {
    this.engine = new Engine();

    this.id = this.route.snapshot.params['id'];
    
    this.engineService.getEngine(this.id)
      .subscribe(data => {
        this.engine = data;
      });
  }

  list(){
    this.router.navigate(['engine']);
  }
}
