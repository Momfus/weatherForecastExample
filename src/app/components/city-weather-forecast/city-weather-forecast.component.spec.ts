import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CityWeatherForecastComponent } from './city-weather-forecast.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatToolbarModule,
        MatRadioModule, MatProgressSpinnerModule, MatSnackBarModule, MatDividerModule, MatTabsModule,
        MatCardModule,  MatGridListModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherInfo } from '../../models/weather-info';

describe('CityWeatherForecastComponent', () => {

    let component: CityWeatherForecastComponent;
    let fixture: ComponentFixture<CityWeatherForecastComponent>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    const mockProvinceObject =

    beforeEach(async( () => {

        TestBed.configureTestingModule({
            declarations: [
                CityWeatherForecastComponent

            ],
            imports: [
                HttpClientModule,
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
                MatGridListModule,
                BrowserAnimationsModule,
                NoopAnimationsModule

              ],
        }).compileComponents();

    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(CityWeatherForecastComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();

    });


    it('should create the CityWeatherForecast', async( () => {

        expect(component).toBeTruthy();

    }));

    it(`should have as title 'Argentina Weather Forecast'` , async( () => {

        expect(component.title).toEqual('Argentina Weather Forecast');

    } ));


    it('should display the correct title' , async( () => {

        debugElement = fixture.debugElement.query(By.css('#title'));
        htmlElement = debugElement.nativeElement;

        expect(htmlElement.textContent).toEqual(component.title);

    } ));

    it('should have form not valid and not show weather information' , async( () => {

        expect(component.isWeatherForecastFormValid()).not.toEqual(true);
        expect(component.showWeatherInfo).toEqual(false);

    } ));

    it('should search Mendoza (3844421) wheater forecast', async(() => {

        const provinceId = 3844421; // Mendoza
        const day = 1;

        component.weatherForecastService.getForecastDaily( provinceId, day).subscribe(result => {
          expect(result.city.name).toEqual('Mendoza');
        });

     }));

    describe(`City Wheater show / hide information`, () => {

        let provinceWheaterMock: WeatherInfo = {
            tempMin: 14.49,
            tempMax: 15.58,
            humidity: 39,
            weather: 'Clear',
            date: new Date('2019-04-22T16:00:00.000Z'),
            icon: 'https://openweathermap.org/img/w/01n.png'
            };

        it('should search and display Mendoza (3844421) wheater forecast', ( async() => {

            component.listWeatherInfo.push(provinceWheaterMock);
            component.showWeatherInfo = true;
            fixture.detectChanges();

            debugElement = fixture.debugElement.query(By.css( '#weatherType' ));
            htmlElement = debugElement.nativeElement;
            expect(htmlElement.textContent).toEqual(' Clear ');
        }));

        it('should hide wheater forecast', ( async() => {

            component.listWeatherInfo.push(provinceWheaterMock);
            component.showWeatherInfo = true;
            fixture.detectChanges();

            debugElement = fixture.debugElement.query(By.css( '#clearButton' ));
            debugElement.triggerEventHandler('click', null);
            fixture.detectChanges();

            expect(component.showWeatherInfo).toEqual(false);

        }));

    });

});
