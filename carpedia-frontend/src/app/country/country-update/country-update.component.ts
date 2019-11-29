import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.css']
})
export class CountryUpdateComponent implements OnInit {

  id: number;
  country: Country;

  constructor(private route: ActivatedRoute,private router: Router,
    private countryService: CountryService) { }

  ngOnInit() {
    this.country = new Country();

    this.id = this.route.snapshot.params['id'];
    
    this.countryService.getCountry(this.id)
      .subscribe(data => {
        console.log(data)
        this.country = data;
      }, error => console.log(error));
  }

  updateCountry() {
    this.countryService.updateCountry(this.id, this.country)
      .subscribe(data => console.log(data), error => console.log(error));
    this.country = new Country();
    this.gotoList();
  }

  onSubmit() {
    this.updateCountry();    
  }

  gotoList() {
    this.router.navigate(['country']);
  }
}
