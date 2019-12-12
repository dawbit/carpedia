import { SegmentService } from '../segment.service';
import { Segment } from '../segment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-segment-create',
  templateUrl: './segment-create.component.html',
  styleUrls: ['./segment-create.component.css']
})
export class SegmentCreateComponent implements OnInit {

  segment: Segment = new Segment();
  submitted = false;
  error = false;

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
      this.save();   
    }
  }

}
