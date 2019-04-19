import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityWeatherForecastComponent } from './components/city-weather-forecast/city-weather-forecast.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';

import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    CityWeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
