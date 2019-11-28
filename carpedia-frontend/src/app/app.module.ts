import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSimplyCarComponent } from './simplycar/simplycar-create/simplycar-create.component';
import { SimplyCarDetailsComponent } from './simplycar/simplycar-details/simplycar-details.component';
import { SimplyCarListComponent } from './simplycar/simplycar-list/simplycar-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSimplyCarComponent } from './simplycar/simplycar-update/update-simplycar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,

    // for Simply Car
    CreateSimplyCarComponent,
    SimplyCarDetailsComponent,
    SimplyCarListComponent,
    UpdateSimplyCarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
