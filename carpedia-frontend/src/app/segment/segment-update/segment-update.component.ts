import { Component, OnInit } from '@angular/core';
import { Segment } from '../segment';
import { ActivatedRoute, Router } from '@angular/router';
import { SegmentService } from '../segment.service';

@Component({
  selector: 'app-segment-update',
  templateUrl: './segment-update.component.html',
  styleUrls: ['./segment-update.component.css']
})
export class SegmentUpdateComponent implements OnInit {

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

  updateSegment() {
    this.segmentService.updateSegment(this.id, this.segment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.segment = new Segment();
    this.gotoList();
  }

  onSubmit() {
    this.updateSegment();    
  }

  gotoList() {
    this.router.navigate(['segment']);
  }
}
