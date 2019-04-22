import { WeatherInfo } from './weather-info';

describe('WeatherInfo', () => {
  
  const auxTempMin = 18;
  const auxTempMax = 22;
  const auxHumidity = 30;
  const auxWeater = 'Clear';
  const auxDate = new Date();
  const auxIcon = '01n';


  it('should create an instance with their correct values', () => {

    expect( new WeatherInfo( auxTempMin, auxTempMax, auxHumidity, auxWeater, auxDate, auxIcon ) ).toBeTruthy();
    
  });
});
