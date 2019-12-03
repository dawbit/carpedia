import { SegmentService } from '../segment.service';
import { Segment } from '../segment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segment-create',
  templateUrl: './segment-create.component.html',
  styleUrls: ['./segment-create.component.css']
})
export class SegmentCreateComponent implements OnInit {

  segment: Segment = new Segment();
  submitted = false;

  constructor(private segmentService: SegmentService,
    private router: Router) { }

  ngOnInit() {
  }

  newSegment(): void {
    this.submitted = false;
    this.segment = new Segment();
  }

  save() {
    this.segmentService.createSegment(this.segment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.segment = new Segment();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
