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
  MatSelectModule,
  MatCardModule
} from "@angular/material";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {ReactiveFormsModule} from '@angular/forms';


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
    MatProgressSpinnerModule,
    MatCardModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
