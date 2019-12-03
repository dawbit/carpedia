import { Component, OnInit } from '@angular/core';
import { Bodytype } from '../bodytype';
import { ActivatedRoute, Router } from '@angular/router';
import { BodytypeService } from '../bodytype.service';

@Component({
  selector: 'app-bodytype-update',
  templateUrl: './bodytype-update.component.html',
  styleUrls: ['./bodytype-update.component.css']
})
export class BodytypeUpdateComponent implements OnInit {

  id: number;
  bodytype: Bodytype;

  constructor(private route: ActivatedRoute,private router: Router,
    private bodytypeService: BodytypeService) { }

  ngOnInit() {
    this.bodytype = new Bodytype();

    this.id = this.route.snapshot.params['id'];
    
    this.bodytypeService.getBodytype(this.id)
      .subscribe(data => {
        console.log(data)
        this.bodytype = data;
      }, error => console.log(error));
  }

  updateBodytype() {
    this.bodytypeService.updateBodytype(this.id, this.bodytype)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bodytype = new Bodytype();
    this.gotoList();
  }

  onSubmit() {
    this.updateBodytype();    
  }

  gotoList() {
    this.router.navigate(['bodytype']);
  }
}
