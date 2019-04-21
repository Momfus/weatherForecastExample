import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityWeatherForecastComponent } from './components/city-weather-forecast/city-weather-forecast.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';

import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatToolbarModule,
        MatRadioModule, MatProgressSpinnerModule, MatSnackBarModule, MatDividerModule, MatTabsModule,
        MatCardModule,  MatGridListModule } from '@angular/material';

import { WeatherSpinnerComponent } from './components/weather-spinner/weather-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    CityWeatherForecastComponent,
    WeatherSpinnerComponent
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
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
