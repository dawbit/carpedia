import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule
} from "@angular/material";
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
    CompanyUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
