import { EngineService } from '../engine.service';
import { Engine } from '../engine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engine-create',
  templateUrl: './engine-create.component.html',
  styleUrls: ['./engine-create.component.css']
})
export class EngineCreateComponent implements OnInit {

  engine: Engine = new Engine();
  submitted = false;

  constructor(private engineService: EngineService,
    private router: Router) { }

  ngOnInit() {
  }

  newEngine(): void {
    this.submitted = false;
    this.engine = new Engine();
  }

  save() {
    this.engineService.createEngine(this.engine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.engine = new Engine();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
