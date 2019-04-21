import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherInfo } from '../../models/weather-info';
import { ProvinceInfo } from '../../models/province-info';
import { ProvincesArgentinaService } from '../../services/provinces-argentina.service';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { SpinnerService } from '../../services/spinner.service';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html'
})
export class CityWeatherForecastComponent implements OnInit {

    // ----------------------------------
    // --> Attributes
    // ----------------------------------

    title = 'Argentina Weather Forecast';
    messageArrayType =  [
        'Searching...',
        'There isn\'t any weather forecast information'
    ]
    messageWeatherInformation = this.messageArrayType[1];

    listWeatherInfo: WeatherInfo[] = [];
    showWeatherInfo = false;

    provinces: ProvinceInfo[];
    cityWheaterForecastForm: FormGroup;

    // ----------------------------------
    // ---> Constructor / OnInit
    // ----------------------------------

    constructor(
        private formBuilder: FormBuilder,
        private _provinceArgentinaService: ProvincesArgentinaService,
        private _weatherForecastService: WeatherForecastService,
        private spinnerService: SpinnerService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {

        this.provinces = this._provinceArgentinaService.getProvinces();
        this.cityWheaterForecastForm = this.buildFormCityWheaterForecast();

    }

    // ----------------------------------
    // ---> General Functions
    // ----------------------------------
    searchWeatherInfo() {
        this.showWeatherInfo = false;
        this.messageWeatherInformation = this.messageArrayType[0];
        const id = this.cityWheaterForecastForm.value.provinceObject.id;
        const days = this.cityWheaterForecastForm.value.dayChoose;

        this.spinnerService.displayLoader(true)

        this._weatherForecastService.getForecastDialy(id, days )
            .subscribe(

                (res: any ) => {

                    this.setListWeatherInfo(res);
                    this.spinnerService.displayLoader(false);
                    this.snackBar.open('Forecast finded!', '', {duration: 2000});

                },
                error => {

                    this.messageWeatherInformation = this.messageArrayType[1];
                    this.spinnerService.displayLoader(false);
                    this.snackBar.open('Forecast not finded :(', `ERROR: ${error.status}`, {duration: 5000});
                }

            );

    }


    // ----------------------------------
    // ---> Weather Info Functions
    // ----------------------------------

    setListWeatherInfo( resJson: any ) {

        this.listWeatherInfo = [];
        this.showWeatherInfo = true;

        let auxWeatherInfo: WeatherInfo;
        let auxTempMin: number;
        let auxTempMax: number;
        let auxHumidity: number;
        let auxWeather: string;
        let auxDate: Date;
        let auxIcon: string;

        for( let i = 0; i < resJson.list.length; i++ ) {

            auxTempMin = resJson.list[i].temp.min;
            auxTempMax = resJson.list[i].temp.max;
            auxHumidity = resJson.list[i].humidity;
            auxWeather = resJson.list[i].weather[0].main;
            auxIcon = `https://openweathermap.org/img/w/${resJson.list[i].weather[0].icon}.png`;

            /* NOTE:
                I know is a little messy but the API use "unix timestamps" and this was the only easy way i found to
                do show the correct date
            */
            auxDate = new Date(resJson.list[i].dt * 1000   );
            auxDate.setDate( auxDate.getDate() + 1 );

            auxWeatherInfo = new WeatherInfo(auxTempMin, auxTempMax, auxHumidity, auxWeather, auxDate, auxIcon );
            this.listWeatherInfo.push( auxWeatherInfo );
        }


    }

    cleanWeatherInfo() {

        this.showWeatherInfo = false;
        this.cityWheaterForecastForm.reset();

        this.messageWeatherInformation = this.messageArrayType[1];
        this.snackBar.open('Weather forecast information cleaned', ':)', {duration: 2000});

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
