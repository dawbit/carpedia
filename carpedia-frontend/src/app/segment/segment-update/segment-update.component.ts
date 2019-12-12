import { Component, OnInit } from '@angular/core';
import { Segment } from '../segment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SegmentService } from '../segment.service';

@Component({
  selector: 'app-segment-update',
  templateUrl: './segment-update.component.html',
  styleUrls: ['./segment-update.component.css']
})
export class SegmentUpdateComponent implements OnInit {

  id: number;
  segment: Segment;
  submitted = false;
  error = false;

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
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[A-Z]$")]),
  });

  validError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if(this.form.invalid){
      this.error = true;
      return;
    }
    else{
      this.error = false;
      this.submitted = true;
      this.updateSegment();   
    }
  }

}
