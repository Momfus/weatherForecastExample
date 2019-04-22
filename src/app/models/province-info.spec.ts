import { ProvinceInfo } from './province-info';

describe('ProvinceInfo', () => {

  const auxId = 3844421;
  const auxName = 'Mendoza';
  const auxCountry = 'Ar';
  const auxCoord = {
    lon: -68.8272,
    lat: -32.8909
  };


  it('should create an instance with their correct values', () => {

    expect(  new ProvinceInfo(auxId, auxName, auxCountry, auxCoord) ).toBeTruthy();

  });
})