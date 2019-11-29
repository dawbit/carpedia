import { SimplyCarDetailsComponent } from './simplycar/simplycar-details/simplycar-details.component';
import { CreateSimplyCarComponent } from './simplycar/simplycar-create/simplycar-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplyCarListComponent } from './simplycar/simplycar-list/simplycar-list.component';
import { UpdateSimplyCarComponent } from './simplycar/simplycar-update/simplycar-update.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },

  { path: 'simplycar', component: SimplyCarListComponent },
  { path: 'simplycar/add', component: CreateSimplyCarComponent },
  { path: 'simplycar/update/:id', component: UpdateSimplyCarComponent },
  { path: 'simplycar/details/:id', component: SimplyCarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
