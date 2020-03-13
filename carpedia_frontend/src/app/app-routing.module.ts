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

import {UserListComponent} from './user/user-list/user-list.component';
import {UserCreateComponent} from './user/user-create/user-create.component';
import {UserUpdateComponent} from './user/user-update/user-update.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserLoginComponent} from './user/user-login/user-login.component';

import { DefaultGuard } from './security/guards/default.quard';
import { AuthGuard } from './security/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },

  { path: 'simplycar', component: SimplyCarListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'simplycar/add', component: SimplyCarCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'simplycar/update/:id', component: SimplyCarUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'simplycar/details/:id', component: SimplyCarDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'country', component: CountryListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'country/add', component: CountryCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'country/update/:id', component: CountryUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'country/details/:id', component: CountryDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'company', component: CompanyListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'company/add', component: CompanyCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'company/update/:id', component: CompanyUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'company/details/:id', component: CompanyDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'segment', component: SegmentListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'segment/add', component: SegmentCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'segment/update/:id', component: SegmentUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'segment/details/:id', component: SegmentDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'bodytype', component: BodytypeListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'bodytype/add', component: BodytypeCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'bodytype/update/:id', component: BodytypeUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'bodytype/details/:id', component: BodytypeDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'engine', component: EngineListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'engine/add', component: EngineCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'engine/update/:id', component: EngineUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'engine/details/:id', component: EngineDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'car', component: CarListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'car/add', component: CarCreateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'car/update/:id', component: CarUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'car/details/:id', component: CarDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'user', component: UserListComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'registry', component: UserCreateComponent},
  
  { path: 'user/update/:id', component: UserUpdateComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },
  { path: 'user/details/:id', component: UserDetailsComponent,
  canActivate: [DefaultGuard], canLoad: [DefaultGuard] },

  { path: 'login', component: UserLoginComponent, 
  canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
