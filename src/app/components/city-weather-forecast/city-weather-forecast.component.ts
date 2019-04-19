import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherInfo } from '../../models/weather-info';


@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html'
})
export class CityWeatherForecastComponent implements OnInit {

  title = 'Argentina Weather Forecast';
  weatherInfo: WeatherInfo = {

    cityName: '',
    dayChoose: ''

  }

  cities: any[] = [

    { value: 'Mendoza' },
    { value: 'Buenos Aires' },
    { value: 'Córdoba' }

  ];

  cityWheaterForecastForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.cityWheaterForecastForm = this.buildFormCityWheaterForecast();

  }

  searchWeatherInfo() {

    this.weatherInfoJsonToModel( this.cityWheaterForecastForm.value );
    console.log( JSON.stringify( this.weatherInfo, null , 2 ) );

  }


  weatherInfoJsonToModel( _json ) {

    this.weatherInfo.cityName = _json.cityName;
    this.weatherInfo.dayChoose = _json.dayChoose;

  }

  buildFormCityWheaterForecast() {

    return this.formBuilder.group({

      cityName: ['', Validators.required],
      dayChoose: ['', Validators.required]

    });

  }

  isWeatherForecastFormValid(): boolean {

    return ( this.cityWheaterForecastForm.get('cityName').valid && this.cityWheaterForecastForm.get('dayChoose').valid )

  }

}
