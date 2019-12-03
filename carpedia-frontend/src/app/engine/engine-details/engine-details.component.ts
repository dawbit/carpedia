import { Engine } from '../engine';
import { Component, OnInit, Input } from '@angular/core';
import { EngineService } from '../engine.service';
import { EngineListComponent } from '../engine-list/engine-list.component';
import { Router, ActivatedRoute } from '@angular/router';

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
        console.log(data)
        this.engine = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['engine']);
  }
}
