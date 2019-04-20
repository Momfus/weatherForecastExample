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

    const id = this.cityWheaterForecastForm.value.provinceObject.id;
    const days = this.cityWheaterForecastForm.value.dayChoose;

    this._weatherForecastService.getForecastDialy(id, days )
        .subscribe(

            (res: any ) => {

                console.log(res);

            },
            error => {

                console.log(error);

            }

        );

  }


  // ----------------------------------
  // ---> Transform Functions
  // ----------------------------------
  weatherInfoJsonToModel( weatherJson ) {

    this.weatherInfo.provinceName = weatherJson.provinceName;
    this.weatherInfo.dayChoose = weatherJson.dayChoose;

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
