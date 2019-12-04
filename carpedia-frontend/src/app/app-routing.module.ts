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

import {SegmentListComponent} from './segment/segment-list/segment-list.component';
import {SegmentCreateComponent} from './segment/segment-create/segment-create.component';
import {SegmentUpdateComponent} from './segment/segment-update/segment-update.component';
import {SegmentDetailsComponent} from './segment/segment-details/segment-details.component';

import {BodytypeListComponent} from './bodytype/bodytype-list/bodytype-list.component';
import {BodytypeCreateComponent} from './bodytype/bodytype-create/bodytype-create.component';
import {BodytypeUpdateComponent} from './bodytype/bodytype-update/bodytype-update.component';
import {BodytypeDetailsComponent} from './bodytype/bodytype-details/bodytype-details.component';

import {EngineListComponent} from './engine/engine-list/engine-list.component';
import {EngineCreateComponent} from './engine/engine-create/engine-create.component';
import {EngineUpdateComponent} from './engine/engine-update/engine-update.component';
import {EngineDetailsComponent} from './engine/engine-details/engine-details.component';

import {CarListComponent} from './car/car-list/car-list.component';
import {CarCreateComponent} from './car/car-create/car-create.component';
import {CarUpdateComponent} from './car/car-update/car-update.component';
import {CarDetailsComponent} from './car/car-details/car-details.component';


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

  { path: 'segment', component: SegmentListComponent },
  { path: 'segment/add', component: SegmentCreateComponent },
  { path: 'segment/update/:id', component: SegmentUpdateComponent },
  { path: 'segment/details/:id', component:SegmentDetailsComponent },

  { path: 'bodytype', component: BodytypeListComponent },
  { path: 'bodytype/add', component: BodytypeCreateComponent },
  { path: 'bodytype/update/:id', component: BodytypeUpdateComponent },
  { path: 'bodytype/details/:id', component:BodytypeDetailsComponent },

  { path: 'engine', component: EngineListComponent },
  { path: 'engine/add', component: EngineCreateComponent },
  { path: 'engine/update/:id', component: EngineUpdateComponent },
  { path: 'engine/details/:id', component:EngineDetailsComponent },

  { path: 'car', component: CarListComponent },
  { path: 'car/add', component: CarCreateComponent },
  { path: 'car/update/:id', component: CarUpdateComponent },
  { path: 'car/details/:id', component:CarDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
