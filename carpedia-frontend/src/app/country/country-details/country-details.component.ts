import { Country } from '../country';
import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';
import { CountryListComponent } from '../country-list/country-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['country']);
  }
}
