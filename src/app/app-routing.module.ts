import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent/home.component';
import { AboutComponent } from './AboutComponent/about.component'
import { CountryComponent } from './CountryComponent/country.component';
import { MapComponent } from './MapComponent/map-component.component';



const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'map',
      component: MapComponent
  },
  {
    path: 'world',
    redirectTo: "./world.svg"
  },
  {
      path: 'home/hawaii',
      component: CountryComponent
  },
  {
      path: 'home/japan',
      component: CountryComponent
  },
  {
      path: 'home/china',
      component: CountryComponent
  },
  {
      path: 'home/vietnam',
      component: CountryComponent
  },
  {
    path: 'home/malaysia',
    component: CountryComponent
  },
  {
      path: 'home/india',
      component: CountryComponent
  },
  {
      path: 'home/mauritius',
      component: CountryComponent
  },
  {
      path: 'home/southafrica',
      component: CountryComponent
  },
  {
    path: 'home/ghana',
    component: CountryComponent
  },
  {
      path: 'home/morocco',
      component: CountryComponent
  },
  {
      path: 'home/netherlands',
      component: CountryComponent
  },
  {
      path: 'home/germany',
      component: CountryComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
