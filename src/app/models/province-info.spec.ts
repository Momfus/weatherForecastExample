import { ProvinceInfo } from './province-info';

describe('ProvinceInfo', () => {
  it('should create an instance', () => {

    const auxId = 3844421;
    const auxName = 'Mendoza';
    const auxCountry = 'Ar';
    const auxCoord = {
      lon: -68.8272,
      lat: -32.8909
    };

    expect(  new ProvinceInfo(auxId, auxName, auxCountry, auxCoord) ).toBeTruthy();

  });
})