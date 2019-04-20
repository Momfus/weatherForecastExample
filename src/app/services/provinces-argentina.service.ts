import { Injectable } from '@angular/core';
import { ProvinceInfo } from '../models/province-info';


@Injectable({
  providedIn: 'root'
})
export class ProvincesArgentinaService {

    /* For the sake of this example, i just create the JSON here with only provinces of Argentina 
  (Ideally I would consult a database through the backend or an api that has the expected format.)*/
  private provincesArgentina: ProvinceInfo[] = [

    {
      id: 3433955,
      name: 'Ciudad Autónoma de Buenos Aires',
      country: 'AR',
      coord: {
        lon: -58.450001,
        lat: -34.599998
      }
    },

    {
      id: 3435907,
      name: 'Provincia de Buenos Aires',
      country: 'AR',
      coord: {
        lon: -60,
        lat: -36
      }
    },

    {
      id: 3862286,
      name: 'Catamarca',
      country: 'AR',
      coord: {
        lon: -67,
        lat: -27
      }
    },

    {
      id: 3861887,
      name: 'Chaco',
      country: 'AR',
      coord: {
        lon: -60.5,
        lat: -26
      }
    },

    {
      id: 3861244,
      name: 'Chubut',
      country: 'AR',
      coord: {
        lon: -69,
        lat: -44
      }
    },

    {
      id: 3860259,
      name: 'Córdoba',
      country: 'AR',
      coord: {
        lon: -64.181053,
        lat: -31.4135
      }
    },

    {
      id: 3435214,
      name: 'Corrientes',
      country: 'AR',
      coord: {
        lon: -58,
        lat: -29
      }
    },

    {
      id: 3434137,
      name: 'Entre Ríos',
      country: 'AR',
      coord: {
        lon: -59,
        lat: -32
      }
    },

    {
      id: 3433896,
      name: 'Formosa',
      country: 'AR',
      coord: {
        lon: -60,
        lat: -25
      }
    },

    {
      id: 3853404,
      name: 'Jujuy',
      country: 'AR',
      coord: {
        lon: -66,
        lat: -23
      }
    },

    {
      id: 3849574,
      name: 'La Pampa',
      country: 'AR',
      coord: {
        lon: -66,
        lat: -37
      }
    },

    {
      id: 3848949,
      name: 'La Rioja',
      country: 'AR',
      coord: {
        lon: -67.5,
        lat: -30
      }
    },

    {
      id: 3844419,
      name: 'Mendoza',
      country: 'AR',
      coord: {
        lon: -68.5,
        lat: -34.5
      }
    },

    {
      id: 3430657,
      name: 'Misiones',
      country: 'AR',
      coord: {
        lon: -55,
        lat: -27
      }
    },

    {
      id: 3843122,
      name: 'Neuquén',
      country: 'AR',
      coord: {
        lon: -70,
        lat: -39
      }
    },

    {
      id: 3838830,
      name: 'Río Negro',
      country: 'AR',
      coord: {
        lon: -67,
        lat: -40
      }
    },

    {
      id: 3838231,
      name: 'Salta',
      country: 'AR',
      coord: {
        lon: -65.43457,
        lat: -24.75806
      }
    },

    {
      id: 3837152,
      name: 'San Juan',
      country: 'AR',
      coord: {
        lon: -69,
        lat: -31
      }
    },

    {
      id: 3837029,
      name: 'San Luis',
      country: 'AR',
      coord: {
        lon: -66,
        lat: -34
      }
    },

    {
      id: 3836350,
      name: 'Santa Cruz',
      country: 'AR',
      coord: {
        lon: -70,
        lat: -49
      }
    },

    {
      id: 3836276,
      name: 'Santa Fe',
      country: 'AR',
      coord: {
        lon: -61,
        lat: -31
      }
    },

    {
      id: 3835868,
      name: 'Santiago del Estero',
      country: 'AR',
      coord: {
        lon: -63.5,
        lat: -28
      }
    },

    {
      id: 3834450,
      name: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
      country: 'AR',
      coord: {
        lon: -67,
        lat: -54.5
      }
    },

    {
      id: 3833578,
      name: 'Tucumán',
      country: 'AR',
      coord: {
        lon: -65.5,
        lat: -27
      }
    },

  ]

  constructor() {

  }

  getProvinces() {

    return this.provincesArgentina;

  }

}
