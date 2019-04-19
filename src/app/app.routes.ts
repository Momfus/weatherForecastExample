import { Routes } from '@angular/router';
import { CityWeatherForecastComponent } from './components/city-weather-forecast/city-weather-forecast.component';


export const ROUTES: Routes = [

  { path: 'home', component: CityWeatherForecastComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
