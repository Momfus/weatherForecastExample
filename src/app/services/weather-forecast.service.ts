import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  urlDaily = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
  openWeatherApiId = 'c0c4a4b4047b97ebc5948ac9c48c0559';

  constructor( private http: HttpClient ) {

  }

  getForecastDialy( _idCity: number, _daysForecast: number  ) {

    console.log(_idCity);
    console.log(_daysForecast);

    let _query = `${ this.urlDaily }id=${ _idCity }&units=metric&cnt=${ _daysForecast }&lang=en&appid=${ this.openWeatherApiId }`;

    console.log(_query);



  }

}