import { BodytypeService } from '../bodytype.service';
import { Bodytype } from '../bodytype';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodytype-create',
  templateUrl: './bodytype-create.component.html',
  styleUrls: ['./bodytype-create.component.css']
})
export class BodytypeCreateComponent implements OnInit {

  bodytype: Bodytype = new Bodytype();
  submitted = false;

  constructor(private bodytypeService: BodytypeService,
    private router: Router) { }

  ngOnInit() {
  }

  newBodytype(): void {
    this.submitted = false;
    this.bodytype = new Bodytype();
  }

  save() {
    this.bodytypeService.createBodytype(this.bodytype)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bodytype = new Bodytype();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
