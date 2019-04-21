import { WeatherInfo } from './weather-info';

describe('WeatherInfo', () => {
  
  it('should create an instance', () => {
    
    const auxTempMin = 18;
    const auxTempMax = 22;
    const auxHumidity = 30;
    const auxWeater = 'Clear';
    const auxDate = new Date();
    const auxIcon = '01n';


    expect( new WeatherInfo( auxTempMin, auxTempMax, auxHumidity, auxWeater, auxDate, auxIcon ) ).toBeTruthy();
  });
});
