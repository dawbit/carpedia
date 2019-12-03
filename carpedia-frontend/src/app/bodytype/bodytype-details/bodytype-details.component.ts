import { Bodytype } from '../bodytype';
import { Component, OnInit, Input } from '@angular/core';
import { BodytypeService } from '../bodytype.service';
import { BodytypeListComponent } from '../bodytype-list/bodytype-list.component';
import { Router, ActivatedRoute } from '@angular/router';

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
        console.log(data)
        this.bodytype = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['bodytype']);
  }
}
