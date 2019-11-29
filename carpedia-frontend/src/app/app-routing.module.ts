import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';

import { SimplyCarDetailsComponent } from './simplycar/simplycar-details/simplycar-details.component';
import { SimplyCarCreateComponent } from './simplycar/simplycar-create/simplycar-create.component';
import { SimplyCarListComponent } from './simplycar/simplycar-list/simplycar-list.component';
import { SimplyCarUpdateComponent } from './simplycar/simplycar-update/simplycar-update.component';

import {CountryListComponent} from './country/country-list/country-list.component';
import {CountryCreateComponent} from './country/country-create/country-create.component';
import {CountryUpdateComponent} from './country/country-update/country-update.component';
import {CountryDetailsComponent} from './country/country-details/country-details.component';

import {CompanyListComponent} from './company/company-list/company-list.component';
import {CompanyCreateComponent} from './company/company-create/company-create.component';
import {CompanyUpdateComponent} from './company/company-update/company-update.component';
import {CompanyDetailsComponent} from './company/company-details/company-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },

  { path: 'simplycar', component: SimplyCarListComponent },
  { path: 'simplycar/add', component: SimplyCarCreateComponent },
  { path: 'simplycar/update/:id', component: SimplyCarUpdateComponent },
  { path: 'simplycar/details/:id', component: SimplyCarDetailsComponent },

  { path: 'country', component: CountryListComponent },
  { path: 'country/add', component: CountryCreateComponent },
  { path: 'country/update/:id', component: CountryUpdateComponent },
  { path: 'country/details/:id', component: CountryDetailsComponent },

  { path: 'company', component: CompanyListComponent },
  { path: 'company/add', component: CompanyCreateComponent },
  { path: 'company/update/:id', component: CompanyUpdateComponent },
  { path: 'company/details/:id', component:CompanyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
