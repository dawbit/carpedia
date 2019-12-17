import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Segment } from '../segment';
import { SegmentService } from '../segment.service';

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
        this.segment = data;
      });
  }

  list(){
    this.router.navigate(['segment']);
  }
}
