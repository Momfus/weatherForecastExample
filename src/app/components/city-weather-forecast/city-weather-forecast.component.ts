import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherInfo } from '../../models/weather-info';
import { ProvinceInfo } from '../../models/province-info';
import { ProvincesArgentinaService } from '../../services/provinces-argentina.service';
import { WeatherForecastService } from '../../services/weather-forecast.service';



@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html'
})
export class CityWeatherForecastComponent implements OnInit {

  // ----------------------------------
  // --> Attributes
  // ----------------------------------

  title = 'Argentina Weather Forecast';
  weatherInfo: WeatherInfo = {

    provinceName: '',
    dayChoose: ''

  }

  provinces: ProvinceInfo[];
  cityWheaterForecastForm: FormGroup;

  // ----------------------------------
  // ---> Constructor / OnInit
  // ----------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private _provinceArgentinaService: ProvincesArgentinaService,
    private _weatherForecastService: WeatherForecastService
  ) { }

  ngOnInit() {

    this.provinces = this._provinceArgentinaService.getProvinces();
    this.cityWheaterForecastForm = this.buildFormCityWheaterForecast();

  }

  // ----------------------------------
  // ---> General Functions
  // ----------------------------------
  searchWeatherInfo() {

    let _id = this.cityWheaterForecastForm.value.provinceObject.id;
    let _days = this.cityWheaterForecastForm.value.dayChoose;

    this._weatherForecastService.getForecastDialy(_id, _days );

  }


  // ----------------------------------
  // ---> Transform Functions
  // ----------------------------------
  weatherInfoJsonToModel( _json ) {

    this.weatherInfo.provinceName = _json.provinceName;
    this.weatherInfo.dayChoose = _json.dayChoose;

  }

  // ----------------------------------
  // ---> Forms functions
  // ----------------------------------
  buildFormCityWheaterForecast() {

    return this.formBuilder.group({

      provinceObject: ['', Validators.required],
      dayChoose: ['', Validators.required]

    });

  }

  isWeatherForecastFormValid(): boolean {

    return ( this.cityWheaterForecastForm.get('provinceObject').valid && this.cityWheaterForecastForm.get('dayChoose').valid )

  }

}
