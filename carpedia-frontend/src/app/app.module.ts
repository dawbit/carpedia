import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
  MatCardModule
} from "@angular/material";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';

// components
import { HomepageComponent } from "./homepage/homepage.component";

import { SimplyCarCreateComponent } from "./simplycar/simplycar-create/simplycar-create.component";
import { SimplyCarDetailsComponent } from "./simplycar/simplycar-details/simplycar-details.component";
import { SimplyCarListComponent } from "./simplycar/simplycar-list/simplycar-list.component";
import { SimplyCarUpdateComponent } from "./simplycar/simplycar-update/simplycar-update.component";

import { CountryCreateComponent } from "./country/country-create/country-create.component";
import { CountryDetailsComponent } from "./country/country-details/country-details.component";
import { CountryListComponent } from "./country/country-list/country-list.component";
import { CountryUpdateComponent } from "./country/country-update/country-update.component";

import { CompanyCreateComponent } from "./company/company-create/company-create.component";
import { CompanyDetailsComponent } from "./company/company-details/company-details.component";
import { CompanyListComponent } from "./company/company-list/company-list.component";
import { CompanyUpdateComponent } from "./company/company-update/company-update.component";

import { SegmentCreateComponent } from './segment/segment-create/segment-create.component';
import { SegmentDetailsComponent } from './segment/segment-details/segment-details.component';
import { SegmentListComponent } from './segment/segment-list/segment-list.component';
import { SegmentUpdateComponent } from './segment/segment-update/segment-update.component';

import { BodytypeCreateComponent } from './bodytype/bodytype-create/bodytype-create.component';
import { BodytypeDetailsComponent } from './bodytype/bodytype-details/bodytype-details.component';
import { BodytypeListComponent } from './bodytype/bodytype-list/bodytype-list.component';
import { BodytypeUpdateComponent } from './bodytype/bodytype-update/bodytype-update.component';

import { EngineCreateComponent } from './engine/engine-create/engine-create.component';
import { EngineDetailsComponent } from './engine/engine-details/engine-details.component';
import { EngineListComponent } from './engine/engine-list/engine-list.component';
import { EngineUpdateComponent } from './engine/engine-update/engine-update.component';

import { CarCreateComponent } from './car/car-create/car-create.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarUpdateComponent } from './car/car-update/car-update.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { AuthModule } from './security/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    SimplyCarCreateComponent,
    SimplyCarDetailsComponent,
    SimplyCarListComponent,
    SimplyCarUpdateComponent,

    CountryCreateComponent,
    CountryDetailsComponent,
    CountryListComponent,
    CountryUpdateComponent,

    CompanyCreateComponent,
    CompanyDetailsComponent,
    CompanyListComponent,
    CompanyUpdateComponent,

    SegmentCreateComponent,
    SegmentDetailsComponent,
    SegmentListComponent,
    SegmentUpdateComponent,

    BodytypeCreateComponent,
    BodytypeDetailsComponent,
    BodytypeListComponent,
    BodytypeUpdateComponent,

    EngineCreateComponent,
    EngineDetailsComponent,
    EngineListComponent,
    EngineUpdateComponent,

    CarCreateComponent,
    CarDetailsComponent,
    CarListComponent,
    CarUpdateComponent,

    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserUpdateComponent,
    UserLoginComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    MatButtonModule, 
    MatButtonToggleModule, 
    MatCardModule, 
    MatInputModule, 
    MatMenuModule, 
    MatPaginatorModule,
    MatProgressBarModule, 
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSortModule,
    MatTableModule, 
    ReactiveFormsModule,

    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
