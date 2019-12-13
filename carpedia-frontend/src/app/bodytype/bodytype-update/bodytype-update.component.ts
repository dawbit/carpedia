import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Bodytype } from '../bodytype';
import { BodytypeService } from '../bodytype.service';

@Component({
  selector: 'app-bodytype-update',
  templateUrl: './bodytype-update.component.html',
  styleUrls: ['./bodytype-update.component.css']
})
export class BodytypeUpdateComponent implements OnInit {

  id: number;
  bodytype: Bodytype;
  submitted = false;
  error = false;

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
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[A-Z][a-zA-Z ].{0,18}$")]),
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
      this.updateBodytype();   
    }
  }

}
