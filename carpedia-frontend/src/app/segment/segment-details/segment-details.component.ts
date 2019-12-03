import { Segment } from '../segment';
import { Component, OnInit, Input } from '@angular/core';
import { SegmentService } from '../segment.service';
import { SegmentListComponent } from '../segment-list/segment-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segment-details',
  templateUrl: './segment-details.component.html',
  styleUrls: ['./segment-details.component.css']
})
export class SegmentDetailsComponent implements OnInit {

  id: number;
  segment: Segment;

  constructor(private route: ActivatedRoute,private router: Router,
    private segmentService: SegmentService) { }

  ngOnInit() {
    this.segment = new Segment();

    this.id = this.route.snapshot.params['id'];
    
    this.segmentService.getSegment(this.id)
      .subscribe(data => {
        console.log(data)
        this.segment = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['segment']);
  }
}
