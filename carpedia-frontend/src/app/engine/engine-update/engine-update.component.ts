import { Component, OnInit } from '@angular/core';
import { Engine } from '../engine';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-engine-update',
  templateUrl: './engine-update.component.html',
  styleUrls: ['./engine-update.component.css']
})
export class EngineUpdateComponent implements OnInit {

  id: number;
  engine: Engine;

  constructor(private route: ActivatedRoute,private router: Router,
    private engineService: EngineService) { }

  ngOnInit() {
    this.engine = new Engine();

    this.id = this.route.snapshot.params['id'];
    
    this.engineService.getEngine(this.id)
      .subscribe(data => {
        console.log(data)
        this.engine = data;
      }, error => console.log(error));
  }

  updateEngine() {
    this.engineService.updateEngine(this.id, this.engine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.engine = new Engine();
    this.gotoList();
  }

  onSubmit() {
    this.updateEngine();    
  }

  gotoList() {
    this.router.navigate(['engine']);
  }
}
