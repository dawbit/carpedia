import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bodytype } from '../bodytype';
import { BodytypeService } from '../bodytype.service';

@Component({
  selector: 'app-bodytype-details',
  templateUrl: './bodytype-details.component.html',
  styleUrls: ['./bodytype-details.component.css']
})
export class BodytypeDetailsComponent implements OnInit {

  id: number;
  bodytype: Bodytype;

  constructor(private route: ActivatedRoute,private router: Router,
    private bodytypeService: BodytypeService) { }

  ngOnInit() {
    this.bodytype = new Bodytype();

    this.id = this.route.snapshot.params['id'];
    
    this.bodytypeService.getBodytype(this.id)
      .subscribe(data => {
        this.bodytype = data;
      });
  }

  list(){
    this.router.navigate(['bodytype']);
  }
}
